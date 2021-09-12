import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {HOST} from "../../../common";
import {Md5} from "ts-md5";

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  password:string = "";
  loading:boolean=false;
  error:boolean=false;

  constructor(
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data : any,
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
  }

  save() {

        this.loading=true;
        this.http.delete(HOST+"article/"+this.data.id+"/"+Md5.hashStr(this.password))
          .toPromise()
          .then(data => {
            this.dialogRef.close(data);
            this.loading=false;
          })
          .catch((error => {
            if(error.status === 403){
              this.error = true
              this.loading=false;
            }
          }));
  }

  close() {
    this.dialogRef.close();
  }


}

interface IResponse{

}
