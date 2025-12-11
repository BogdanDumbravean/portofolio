import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProgrammingComponent } from './programming/programming.component';
import { GamesComponent } from './games/games.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: { title: 'Portfolio - Bogdan Dumbrăvean' }
  },
  {
    path: 'programming',
    component: ProgrammingComponent,
    data: { title: 'Programming Projects - Bogdan Dumbrăvean' }
  },
  {
    path: 'games',
    component: GamesComponent,
    data: { title: 'Games Developed - Bogdan Dumbrăvean' }
  },
  {
    path: 'projects/:list/:id',
    component: ProjectDetailComponent,
    data: { title: 'Project Details - Bogdan Dumbrăvean' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
