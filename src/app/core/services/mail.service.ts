import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MailService {
  private apiEndpoint = 'https://us-central1-conferences-md.cloudfunctions.net/api';

  constructor(private http: HttpClient) {}

  public sendContactMail(email: { name: string; email: string; message: string }): Observable<any> {
    return this.http.post(this.apiEndpoint + '/contact', email);
  }
}
