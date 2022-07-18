import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(private titleService: Title ) { 
    this.titleService.setTitle("Bogdan Dumbrăvean");
  }

  title = 'portofolio';
  gmail:string = "dumbraveanb@gmail.com";
  instagramLink:string = "https://www.instagram.com/bogdan_dumbra/";
  facebookLink:string = "https://www.facebook.com/bogdan.dumbravean";
  linkedinLink:string = "https://www.linkedin.com/in/bogdan-dumbr%C4%83vean-a145bb1b4";
}
