export interface CalendarEvent {
  _id: string;
  name: string;
  link?: string;
  type: 'conference' | 'meetup' | 'workshop' | 'other';
  date: string;
}
