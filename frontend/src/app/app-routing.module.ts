import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostarticleComponent } from './postarticle/postarticle.component';

const routes: Routes = [
  {path:'postarticle',component:PostarticleComponent},
  {path:'**',redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
