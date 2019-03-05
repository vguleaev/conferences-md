import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable()
export class EventsService {
  constructor(private http: HttpClient) { }

  public get(): Observable<any> {
    const months = [
      {
        name: 'March 2019',
        events: [
          { name: 'CodeCamp', date: '18-19 May' },
          { name: 'CodeCamp', date: '18-19 May' },
          { name: 'CodeCamp', date: '18-19 May' },
          { name: 'CodeCamp', date: '18-19 May' },
          { name: 'CodeCamp', date: '18-19 May' }
        ]
      },
      {
        name: 'April 2019',
        events: [
          { name: 'CodeCamp', date: '18-19 May' },
          { name: 'CodeCamp', date: '18-19 May' },
          { name: 'CodeCamp', date: '18-19 May' },
          { name: 'CodeCamp', date: '18-19 May' },
          { name: 'CodeCamp', date: '18-19 May' }
        ]
      },
      {
        name: 'May 2019',
        events: [
          { name: 'CodeCamp', date: '18-19 May' },
          { name: 'CodeCamp', date: '18-19 May' },
          { name: 'CodeCamp', date: '18-19 May' },
          { name: 'CodeCamp', date: '18-19 May' },
          { name: 'CodeCamp', date: '18-19 May' }
        ]
      }
    ];

    return of(months).pipe(delay(2000));
  }
}
