import { Injectable } from '@angular/core';
import { of, Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable()
export class EventsService {
  private apiEndpoint = 'https://us-central1-conferences-md.cloudfunctions.net/api/events';

  constructor(private http: HttpClient) {}

  public get(): Observable<any> {
    return this.http.get(this.apiEndpoint);
  }
}
