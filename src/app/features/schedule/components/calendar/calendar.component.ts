import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {
  @Input() public months: any[] = [];
  @Input() public isLoading: boolean;
  @Output() public clickEvent = new EventEmitter<void>();

  constructor() {}

  public ngOnInit() {}

  public onClickEvent(event: any) {
    this.clickEvent.emit(event);
  }
}
