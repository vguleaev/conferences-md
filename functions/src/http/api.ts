import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

import * as express from 'express';
import * as cors from 'cors';
const app = express();

app.use(cors({ origin: true }));

app.get('/cat', (request, response) => {
  response.send('cat');
});
app.get('/dog', (request, response) => {
  response.send('dog');
});

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

export const api = functions.https.onRequest(app);
