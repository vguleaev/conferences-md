import { Injectable } from '@angular/core';
import { of, Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { DateFormatHelper } from 'src/app/utils/date-format-helper';
import { months } from 'moment';

@Injectable()
export class EventsService {
  private apiEndpoint = 'https://us-central1-conferences-md.cloudfunctions.net/api/events';

  constructor(private http: HttpClient) {}

  public get(): Observable<any> {
    return this.http.get(this.apiEndpoint).pipe(
      map((events: any) => {
        events.sort((a, b) => {
          return a.date._seconds - b.date._seconds;
        });

        const groupedEvents = [];

        events.forEach(event => {
          const result: any = {};

          result.name = event.name;
          result.link = event.link;
          result.type = event.type === 'conference' ? 'Conference' : 'Other';

          const isDateRange = !!event.dateEnd;
          const momentDate = DateFormatHelper.convertUnixTimestampToMoment(event.date._seconds);
          result.date = momentDate.format('D MMMM');

          if (isDateRange) {
            const momentDateEnd = DateFormatHelper.convertUnixTimestampToMoment(event.dateEnd._seconds);

            if (momentDate.month() === momentDateEnd.month()) {
              result.date = `${momentDate.format('D')}-${momentDateEnd.format('D MMMM')}`;
            } else {
              result.date = `${momentDate.format('D MMMM')}-${momentDateEnd.format('D MMMM')}`;
            }
          }

          const monthName = `${momentDate.format('MMMM')} ${momentDate.year()}`;

          const month = groupedEvents.find(m => m.name === monthName);

          if (month && month.events) {
            month.events.push(result);
          } else {
            groupedEvents.push({ name: monthName, events: [result] });
          }
        });

        return groupedEvents;
      })
    );
  }
}
