import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent as AboutComponent } from './about/main/main.component';
import { MainComponent as PortfolioComponent } from './portfolio/main/main.component';
import { ProgrammingComponent } from './portfolio/programming/programming.component';
import { GamesComponent } from './portfolio/games/games.component';
import { EducationComponent } from './about/education/education.component';
import { HobbiesComponent } from './about/hobbies/hobbies.component';
import { ProjectDetailComponent } from './portfolio/project-detail/project-detail.component';

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
    path: 'portfolio',
    component: PortfolioComponent
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
  },
  {
    path: 'projects/:list/:id',
    component: ProjectDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
