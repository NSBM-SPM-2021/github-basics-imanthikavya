import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostarticleComponent } from './postarticle/postarticle.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ArticlesComponent } from './articles/articles.component';
import { SinglearticleComponent } from './singlearticle/singlearticle.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { DeleteDialogComponent } from './articles/delete-dialog/delete-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    PostarticleComponent,
    AboutusComponent,
    ArticlesComponent,
    SinglearticleComponent,
    DeleteDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
