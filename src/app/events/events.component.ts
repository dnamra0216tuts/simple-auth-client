import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events: any = [];

  constructor(private eventsService: EventService) {}
  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(
      (res) => (this.events = res),
      (err) => console.log(err)
    );
  }
}
