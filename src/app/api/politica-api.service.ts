import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PoliticaApiService {

  private apiUrl = 'https://newsapi.org/v2/everything?q=política+nacional+España&language=es&sortBy=publishedAt&apiKey=3372437ca70447a39dad1961b5385c7f';
  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}