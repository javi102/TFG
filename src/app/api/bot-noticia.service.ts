import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotNoticiaService  {
  private apiUrl = 'https://newsapi.org/v2/everything?q=inteligencia+artificial&apiKey=3372437ca70447a39dad1961b5385c7f';

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}