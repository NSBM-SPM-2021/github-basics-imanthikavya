import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostarticleComponent } from './postarticle/postarticle.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const routes: Routes = [
  {path:'postarticle',component:PostarticleComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'**',redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
