import { CalendarEvent } from './calendar-event.model';

export interface CalendarMonth {
  name: string;
  events: CalendarEvent[];
}
