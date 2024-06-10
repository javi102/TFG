import { Component, OnInit } from '@angular/core';
import { BotNoticiaService } from '../api/bot-noticia.service';

@Component({
  selector: 'app-ia',
  templateUrl: './ia.component.html',
  styleUrls: ['./ia.component.css']
})
export class IaComponent implements OnInit {
  articles: any[] = [];
  maxArticles: number = 8; 

  constructor(private botNoticiaService: BotNoticiaService) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.botNoticiaService.getNews().subscribe((data: { articles: any[]; }) => {
      this.articles = data.articles.slice(0, this.maxArticles);
    });
  }
}