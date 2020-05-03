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
    { id: 1, name: 'Thailand', date: "2019", text: "Urlaub in Thailand", imageUrl: "https://storagemaxieckert.blob.core.windows.net/images/thailand.jpg" },
    { id: 2, name: 'Rom', date: "2019", text: "Urlaub in Rom", imageUrl: "https://storagemaxieckert.blob.core.windows.net/images/rom.jpg" },
    { id: 3, name: 'Tegernsee', date: "2019", text: "Ausflug zum Tegernsee", imageUrl: "https://storagemaxieckert.blob.core.windows.net/images/tegernsee.jpg" },
    { id: 4, name: 'Karibik', date: "2020", text: "Urlaub in den USA & Karibik", imageUrl: "https://storagemaxieckert.blob.core.windows.net/images/karibik.jpg" },
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
