import { Component, OnInit } from '@angular/core';
import { EventsService } from './../../../../core/services/events.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  months: any[] = [];
  areEventsLoading: boolean;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.areEventsLoading = true;

    this.eventsService.get().subscribe(events => {
      this.months = events;
      this.areEventsLoading = false;
    });
  }
}
