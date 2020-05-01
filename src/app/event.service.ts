import { Injectable } from '@angular/core';
import { Event } from "./event";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = 'http://www.metaweather.com/api/location';  // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'secure': 'false'
    })
  };

  events: Event[] = [
    { id: 2487956, name: 'San Francisco' },
    { id: 44418, name: 'London' },
  ];

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService) { }

    private log(message: string) {
      this.messageService.add(`EventService: ${message}`)
    }

  getEvents(): Observable<Event[]> {
    this.log(`fetched events`)
    return of(this.events);
  }

  getEvent(id: number): Observable<Event> {
    this.log(`fetched hero id=${id}`);
    return of(this.events.find(event => event.id === id))
  }
}
