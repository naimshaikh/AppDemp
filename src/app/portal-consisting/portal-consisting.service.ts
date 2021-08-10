import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortalConsistingService {

  public API_URL = 'https://api.covid19india.org/data.json';
  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get(this.API_URL).pipe(map(res => res));
  }
}
