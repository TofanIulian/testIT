import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private http: HttpClient) {
  }

  location() {
    return this.http.get<any>('http://api.open-notify.org/iss-now.json')
  }
}
