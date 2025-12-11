import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { MainComponent } from './main/main.component';
import { ProgrammingComponent } from './programming/programming.component';
import { GamesComponent } from './games/games.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  declarations: [
    MainComponent,
    ProgrammingComponent,
    GamesComponent,
    ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
