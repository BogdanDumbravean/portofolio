import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { MainComponent } from './main/main.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

@NgModule({
  declarations: [
    MainComponent,
    EducationComponent,
    HobbiesComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
