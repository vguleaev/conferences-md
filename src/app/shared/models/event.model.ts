import { EventType } from 'src/app/shared/constants/event-type';

export interface EventDto {
  _id: string;
  name: string;
  link?: string;
  type: EventType;
  date?: { _seconds: number };
  dateEnd?: { _seconds: number };
}
