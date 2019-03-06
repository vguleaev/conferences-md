import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable()
export class EventsService {
  constructor(private http: HttpClient) {}

  public get(): Observable<any> {
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

    return of(months).pipe(delay(2000));
  }
}
