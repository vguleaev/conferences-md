import { Component, OnInit } from '@angular/core';
import { EventsService } from './../../../../core/services/events.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public months: any[] = [];
  public areEventsLoading: boolean;

  constructor(private eventsService: EventsService) {}

  public ngOnInit() {
    this.areEventsLoading = true;

    this.eventsService.get().subscribe(events => {
      this.months = events;
      this.areEventsLoading = false;
    });
  }
}
