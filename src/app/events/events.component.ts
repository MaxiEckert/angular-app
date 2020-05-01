import { Component, OnInit } from '@angular/core';
import { Event } from "../event";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  selectedEvent: Event;

  events: Event[] = [
    { id: 1, name: 'Sophia\'s Geburtstag' },
    { id: 2, name: 'Maxi\'s Geburtstag' },
    { id: 3, name: 'Jahrestag' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }

}
