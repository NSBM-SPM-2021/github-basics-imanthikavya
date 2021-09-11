import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HOST} from "../../common";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private http:HttpClient) { }
  articles: Article[] = []

  ngOnInit(): void {
    this.http.get<Article[]>(HOST+"article/").toPromise().then(result => {
      return this.articles = result
    });
  }

}

interface Article {
  "id": null,
  "name": null,
  "description": null,
  "imgurl": null,
  "medType1": null,
  "medType2": null,
  "medType3": null,
  "medType4": null,
  "owner": null,
  "email": null,
}
