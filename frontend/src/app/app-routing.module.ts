import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostarticleComponent } from './postarticle/postarticle.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ArticlesComponent } from './articles/articles.component';
import { SinglearticleComponent } from './singlearticle/singlearticle.component';



const routes: Routes = [

  {path:'articles/:id',component:SinglearticleComponent},
  {path:'articles',component:ArticlesComponent},
  {path:'postarticle',component:PostarticleComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'',component:ArticlesComponent},
  {path:'articles',component:ArticlesComponent},

  {path:'**',redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
