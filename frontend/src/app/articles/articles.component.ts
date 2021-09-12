import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HOST} from "../../common";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DeleteDialogComponent} from "./delete-dialog/delete-dialog.component";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private http:HttpClient,private dialog: MatDialog) { }
  articles: Article[] = []

  ngOnInit(): void {
    this.http.get<Article[]>(HOST+"article/").toPromise().then(result => {
      return this.articles = result
    });
  }

  openDialog(id :number): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {id: id};
    dialogConfig.width = '250px';

    const dialogRef = this.dialog.open(DeleteDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      window.location.reload();
    });

  }

}

interface Article {
  "id": 0,
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
