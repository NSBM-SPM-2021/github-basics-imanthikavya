import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {HOST} from "../../common";

@Component({
  selector: 'app-singlearticle',
  templateUrl: './singlearticle.component.html',
  styleUrls: ['./singlearticle.component.css']
})
export class SinglearticleComponent implements OnInit {

  article: Article = {} as Article

  constructor(private route :ActivatedRoute,
              private http:HttpClient) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    if(!isNaN(id)){
      this.http.get<Article>(HOST+"article/"+id)
        .toPromise()
        .then(res =>{
          this.article = res;
        })
    }
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
