import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './portfolio/main/main.component';
import { EducationComponent } from './about/education/education.component';
import { HobbiesComponent } from './about/hobbies/hobbies.component';
import { ProgrammingComponent } from './portfolio/programming/programming.component';
import { GamesComponent } from './portfolio/games/games.component';
import { ProjectDetailComponent } from './portfolio/project-detail/project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    EducationComponent,
    HobbiesComponent,
    ProgrammingComponent,
    GamesComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
