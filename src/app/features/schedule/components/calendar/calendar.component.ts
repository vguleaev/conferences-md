import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Constants } from './../../../../shared/constants/constants';
import { months } from 'moment';
import { CalendarMonth } from 'src/app/shared/models/calendar-month.model';
import { CalendarEvent } from 'src/app/shared/models/calendar-event.model';
import { EventType } from 'src/app/shared/constants/event-type';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {
  @Input() public set months(value: CalendarMonth[]) {
    this._months = value;
    this.filteredMonths = value;
  }
  public get months(): CalendarMonth[] {
    return this._months;
  }

  @Input() public isLoading: boolean;
  @Output() public clickEvent = new EventEmitter<void>();

  public currentFilter: EventType | 'all' = 'all';
  public filteredMonths: CalendarMonth[] = [];

  public eventTypes: { value: EventType | 'all'; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'conference', label: Constants.EventTypes['conference'] },
    { value: 'meetup', label: Constants.EventTypes['meetup'] },
    { value: 'workshop', label: Constants.EventTypes['workshop'] },
    { value: 'other', label: Constants.EventTypes['other'] }
  ];

  private _months: CalendarMonth[] = [];

  constructor() {}

  public ngOnInit() {}

  public onClickEvent(event: any) {
    this.clickEvent.emit(event);
  }

  public onFilterChange(type: EventType | 'all') {
    if (type === 'all') {
      this.filteredMonths = this.months;
      return;
    }

    const filteredMonths = this.months.map((month: CalendarMonth) => {
      return { name: month.name, events: month.events.filter((event: CalendarEvent) => event.type === type) };
    });

    this.filteredMonths = filteredMonths.filter((month: CalendarMonth) => month.events && month.events.length > 0);
  }

  public getEventType(type: string) {
    return Constants.EventTypes[type] ? Constants.EventTypes[type] : 'Other';
  }
}
