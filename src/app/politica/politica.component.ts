import { Component, OnInit } from '@angular/core';
import { PoliticaApiService } from '../api/politica-api.service';
@Component({
  selector: 'app-politica',
  templateUrl: './politica.component.html',
  styleUrls: ['./politica.component.css']
})
export class PoliticaComponent implements OnInit {
  articles: any[] = [];
  maxArticles: number = 6; 
  getNews: any;

  constructor(private politicaAPI: PoliticaApiService) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.politicaAPI.getNews().subscribe((data: { articles: any[]; }) => {
      this.articles = data.articles.slice(0, this.maxArticles);
    });
  }
}