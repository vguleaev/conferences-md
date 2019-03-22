import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

import * as express from 'express';
import * as cors from 'cors';
import { MailService } from './../services/mail-service';
import { EnvironmentVariables } from '../models/environment-variables';

const app = express();

app.use(cors({ origin: true }));

app.get('/events', (request, response) => {
  const db = admin.firestore();

  db.collection('events')
    .get()
    .then(snapshot => {
      const result: any[] = [];

      snapshot.forEach(function(doc) {
        result.push(doc.data());
        console.log(doc.id, ' => ', doc.data());
      });

      return response.send(result);
    })
    .catch(reason => {
      return response.send(reason);
    });
});

app.post('/contact', (request, response) => {
  const { name, email, message } = request.body;

  if (!name || !email || !message) {
    return response.status(400).send('Data is invalid');
  }

  const db = admin.firestore();
  const config = functions.config() as EnvironmentVariables;
  const mailService = new MailService(config);
  mailService.sendContactEmail(name, email, message);

  db.collection('emails')
    .add({
      name,
      email,
      message
    })
    .then(function() {
      return response.send(true);
    })
    .catch(function(error) {
      return response.send(error);
    });

  return;
});

app.post('/suggest', (request, response) => {
  const { eventName, eventLink, email } = request.body;

  if (!eventName || !eventLink || !email) {
    return response.status(400).send('Data is invalid');
  }

  const db = admin.firestore();
  const config = functions.config() as EnvironmentVariables;
  const mailService = new MailService(config);
  mailService.sendSuggestEmail(eventName, eventLink, email);

  db.collection('suggestions')
    .add({
      eventName,
      eventLink,
      email
    })
    .then(function() {
      return response.send(true);
    })
    .catch(function(error) {
      return response.send(error);
    });

  return;
});

export const api = functions.https.onRequest(app);
