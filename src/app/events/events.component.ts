import { Component, OnInit } from '@angular/core';
import { Event } from "../event";
import { EventService } from "../event.service";
import { MessageService } from '../message.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  selectedEvent: Event;

  events: Event[];

  constructor(private eventService: EventService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => this.events = events);
  }

  onSelect(event: Event): void {
    this.selectedEvent = event;
    this.messageService.add(`EventService: selected event name=${event.name}`);
  }

}
