import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './pages/portfolio/card/card.component';
import { AboutComponent } from './pages/index/about/about.component';

const routes: Routes = [
  {path:'', component:AboutComponent, pathMatch:'full'},
  {path:'portfolio', component:CardComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
