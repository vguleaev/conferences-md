export interface CalendarEvent {
  _id: string;
  name: string;
  link?: string;
  description?: string;
  type: 'conference' | 'meetup' | 'workshop' | 'other';
  date: string;
}
