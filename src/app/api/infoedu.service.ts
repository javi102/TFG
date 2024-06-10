import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoeduService {

private apiUrl = 'https://newsapi.org/v2/everything?q=estudio+científico+OR+investigación+académica&language=es&apiKey=3372437ca70447a39dad1961b5385c7f';
  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}