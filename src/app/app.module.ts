import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './portofolio/main/main.component';
import { EducationComponent } from './about/education/education.component';
import { HobbiesComponent } from './about/hobbies/hobbies.component';
import { ProgrammingComponent } from './portofolio/programming/programming.component';
import { GamesComponent } from './portofolio/games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    EducationComponent,
    HobbiesComponent,
    ProgrammingComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
