import { Component, OnInit } from '@angular/core';
import { InfoeduService } from '../api/infoedu.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  articles: any[] = [];
  maxArticles: number = 9; 
  getNews: any;

  constructor(private InfoeduService: InfoeduService) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.InfoeduService.getNews().subscribe((data: { articles: any[]; }) => {
      this.articles = data.articles.slice(0, this.maxArticles);
    });
  }
}