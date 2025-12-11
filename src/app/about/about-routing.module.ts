import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: { title: 'About Me - Bogdan Dumbrăvean' }
  },
  {
    path: 'education',
    component: EducationComponent,
    data: { title: 'Education - Bogdan Dumbrăvean' }
  },
  {
    path: 'hobbies',
    component: HobbiesComponent,
    data: { title: 'Hobbies - Bogdan Dumbrăvean' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
