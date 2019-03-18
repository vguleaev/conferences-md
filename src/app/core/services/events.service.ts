import { Injectable } from '@angular/core';
import { of, Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { DateFormatHelper } from 'src/app/utils/date-format-helper';
import { CalendarMonth } from './../../shared/models/calendar-month.model';
import { EventDto } from 'src/app/shared/models/event.model';
import { CalendarEvent } from 'src/app/shared/models/calendar-event.model';

@Injectable()
export class EventsService {
  private apiEndpoint = 'https://us-central1-conferences-md.cloudfunctions.net/api/events';

  constructor(private http: HttpClient) {}

  public get(): Observable<CalendarMonth[]> {
    return this.http.get(this.apiEndpoint).pipe(
      map((events: EventDto[]) => {
        events.sort((a, b) => {
          return a.date._seconds - b.date._seconds;
        });

        const eventsGroupedByMonth: CalendarMonth[] = [];

        events.forEach((event: EventDto) => {
          const result: CalendarEvent = {
            _id: event._id,
            name: event.name,
            link: event.link,
            type: event.type,
            date: ''
          };

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

          const month = eventsGroupedByMonth.find(m => m.name === monthName);

          if (month && month.events) {
            month.events.push(result);
          } else {
            eventsGroupedByMonth.push({ name: monthName, events: [result] });
          }
        });

        return eventsGroupedByMonth;
      })
    );
  }
}
