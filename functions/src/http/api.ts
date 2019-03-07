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
  const months = [
    {
      name: 'March 2019',
      events: [
        {
          name: 'CodeWay - The Mobile Conference',
          date: '30 March',
          link: 'https://www.facebook.com/events/1989859424641167/',
          type: 'Conference'
        }
      ]
    },
    {
      name: 'April 2019',
      events: [{ name: 'Ruby Wine', date: '13 April', link: 'https://www.facebook.com/events/551051368675115/', type: 'Conference' }]
    },
    {
      name: 'May 2019',
      events: [{ name: 'Codecamp Chisinau', date: '11 May', link: 'https://codecamp.ro/chisinau', type: 'Conference' }]
    },
    {
      name: 'November 2019',
      events: [{ name: 'Moldova Developer Conference', date: '2-3 November', link: '', type: 'Conference' }]
    }
  ];

  return response.status(200).send(months);
});

export const api = functions.https.onRequest(app);
