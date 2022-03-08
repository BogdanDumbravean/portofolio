import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent as AboutComponent } from './about/main/main.component';
import { MainComponent as PortofolioComponent } from './portofolio/main/main.component';
import { ProgrammingComponent } from './portofolio/programming/programming.component';
import { GamesComponent } from './portofolio/games/games.component';
import { EducationComponent } from './about/education/education.component';
import { HobbiesComponent } from './about/hobbies/hobbies.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'portofolio',
    component: PortofolioComponent
  },
  {
    path: 'programming',
    component: ProgrammingComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'hobbies',
    component: HobbiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
