import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { PostarticleComponent } from './postarticle.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

describe('PostarticleComponent', () => {
  let component: PostarticleComponent;
  let fixture: ComponentFixture<PostarticleComponent>;
  let postBtn: any;

  const post1 = {
    name: "Freckless",
    description: "Freckles are extra patches of coloring (or pigment) under your skin.",
    imgurl: "test1Imgurl",
    medType1: "Laser",
    medType2: "Chemical Peels",
    medType3: "Cryosurgery.",
    medType4: "Sunscreen",
    owner: "Imanthi Kavya",
    email: "imanthi@gnmail.com",
    password: "imanthi@123",
  };

  function updateForm(name:string,
                      description:string,
                      imgurl:string,
                      medType1:string,
                      medType2:string,
                      medType3:string,
                      medType4:string,
                      owner:string,
                      email:string,
                      password:string) {
    component.profileForm.controls.name.setValue(name);
    component.profileForm.controls.description.setValue(description);
    component.profileForm.controls.imgurl.setValue(imgurl);
    component.profileForm.controls.medType1.setValue(medType1);
    component.profileForm.controls.medType2.setValue(medType2);
    component.profileForm.controls.medType3.setValue(medType3);
    component.profileForm.controls.medType4.setValue(medType4);
    component.profileForm.controls.owner.setValue(owner);
    component.profileForm.controls.email.setValue(email);
    component.profileForm.controls.password.setValue(password);


  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,ReactiveFormsModule],
      declarations: [ PostarticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Article is successfully added when all fields are completed.  ', waitForAsync(() => {

    updateForm(post1.name,
      post1.description,
      post1.imgurl,
      post1.medType1,
      post1.medType2,
      post1.medType3,
      post1.medType4,
      post1.owner,
      post1.email,
      post1.password
      );

     postBtn = fixture.debugElement.nativeElement.querySelector('#submit');
     postBtn.click();

    fixture.whenStable().then(() => {  // wait for async getQuote
      console.log(component.isError)
      expect(component.isError).toBeFalsy();
    });


  }));


  it('Article is not successfully added when password field is null.', waitForAsync(() => {

    updateForm(post1.name,
      post1.description,
      post1.imgurl,
      post1.medType1,
      post1.medType2,
      post1.medType3,
      post1.medType4,
      post1.owner,
      post1.email,
      ""
    );

    postBtn = fixture.debugElement.nativeElement.querySelector('#submit');
    postBtn.click();

    fixture.whenStable().then(() => {  // wait for async getQuote
      expect(component.isError).toBeTruthy();
    });


  }));

  it('Article is not successfully added when email field is null.', waitForAsync(() => {

    updateForm(post1.name,
      post1.description,
      post1.imgurl,
      post1.medType1,
      post1.medType2,
      post1.medType3,
      post1.medType4,
      post1.owner,
      "",
      post1.password
    );

    postBtn = fixture.debugElement.nativeElement.querySelector('#submit');
    postBtn.click();

    fixture.whenStable().then(() => {  // wait for async getQuote
      expect(component.isError).toBeTruthy();
    });


  }));


});
