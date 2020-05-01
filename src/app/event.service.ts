import { Injectable } from '@angular/core';
import { Event } from "./event";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private messageService: MessageService) { }

  getEvents(): Observable<Event[]> {
    this.messageService.add('EventService: fetched events')
    return of([
      { id: 1, name: 'Sophia\'s Geburtstag' },
      { id: 2, name: 'Maxi\'s Geburtstag' },
      { id: 3, name: 'Jahrestag' }
    ]);
  }
}
