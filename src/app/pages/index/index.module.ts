import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CardSkillsComponent } from './card-skills/card-skills.component';



@NgModule({
  declarations: [
    AboutComponent,
    CardSkillsComponent
  ],
  exports:[
    AboutComponent,
    CardSkillsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IndexModule { }
