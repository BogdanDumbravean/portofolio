import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  gmail: string = "dumbraveanb@gmail.com";
  instagramLink: string = "https://www.instagram.com/bogdan_dumbra/";
  facebookLink: string = "https://www.facebook.com/bogdan.dumbravean";
  linkedinLink: string = "https://www.linkedin.com/in/bogdan-dumbravean/";
  isSidebarOpen: boolean = false;
  currentYear: number = new Date().getFullYear();
  
  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(event => {
      if (event['title']) {
        this.titleService.setTitle(event['title']);
      } else {
        this.titleService.setTitle("Bogdan Dumbrăvean");
      }
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  closeSidebarOnMobile() {
    // Only close sidebar on mobile/tablet screens, or if explicitly requested
    if (window.innerWidth <= 992 || this.isSidebarOpen) {
      this.isSidebarOpen = false;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 992) {
      this.isSidebarOpen = false;
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Close sidebar when Escape key is pressed
    if (event.key === 'Escape' && this.isSidebarOpen && window.innerWidth <= 992) {
      this.isSidebarOpen = false;
      event.preventDefault();
    }
  }
}