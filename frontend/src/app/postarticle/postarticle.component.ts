import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Md5} from "ts-md5";
import {HOST} from "../../common";

@Component({
  selector: 'app-postarticle',
  templateUrl: './postarticle.component.html',
  styleUrls: ['./postarticle.component.css']
})
export class PostarticleComponent implements OnInit {
  isLoading: boolean = false;
  isError:boolean = false;
  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    imgurl: new FormControl(''),
    medType1: new FormControl(''),
    medType2: new FormControl(''),
    medType3: new FormControl(''),
    medType4: new FormControl(''),
    owner: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit() : any {

    if(!this.profileForm.valid){
      this.isError = true;
      return false;
    }
    this.isLoading = true;

    this.profileForm.value.password = Md5.hashStr(this.profileForm.value.password);
    let number  = Math.round(Math.random() * 20);
    this.profileForm.value.imgurl = "assets/photos/"+number+".jpg"

    this.http.post(HOST+"article/", this.profileForm.value)
      .toPromise()
      .then(response => {

        this.isLoading = false;
      }).catch(e => {

        this.isError = true;
        this.isLoading = false;
      }
    )
  }
}
