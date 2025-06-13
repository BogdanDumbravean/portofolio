import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PROGRAMMING, GAMES } from 'src/app/project.list';
import { ImgPath, Text, Project } from 'src/app/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {  project!: Project;
  projectType!: string;
  currentIndex!: number;
  hasPrevious: boolean = false;
  hasNext: boolean = false;
  projectsList: Project[] = [];
  videoError: boolean = false;

  constructor(private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    // Subscribe to route parameter changes to handle navigation between projects
    this.route.params.subscribe(params => {
      this.loadProject();
    });
  }  loadProject(): void {
    this.currentIndex = Number(this.route.snapshot.paramMap.get('id'));
    this.projectType = String(this.route.snapshot.paramMap.get('list'));
    
    // Reset video error state
    this.videoError = false;
    
    console.log('Loading project:', this.projectType, this.currentIndex);
    
    if (this.projectType === "programming") {
      this.projectsList = PROGRAMMING;
      if (this.currentIndex >= 0 && this.currentIndex < PROGRAMMING.length) {
        this.project = PROGRAMMING[this.currentIndex];
      } else {
        console.error('Invalid programming project index:', this.currentIndex);
        this.project = new Project("Project Not Found", "", "The requested project could not be found.", []);
      }
    } else if (this.projectType === "games") {
      this.projectsList = GAMES;
      if (this.currentIndex >= 0 && this.currentIndex < GAMES.length) {
        this.project = GAMES[this.currentIndex];
      } else {
        console.error('Invalid games project index:', this.currentIndex);
        this.project = new Project("Project Not Found", "", "The requested project could not be found.", []);
      }
    } else {
      console.error('Invalid project type:', this.projectType);
      this.project = new Project("", "", "", []);
      this.projectsList = [];
    }
    
    // Set navigation availability
    this.hasPrevious = this.currentIndex > 0;
    this.hasNext = this.currentIndex < this.projectsList.length - 1;
    
    console.log('Navigation state:', { hasPrevious: this.hasPrevious, hasNext: this.hasNext, total: this.projectsList.length });
  }

  goBack(): void {
    this.location.back();
  }

  isLink(val: any): boolean { 
    return val.isLink; 
  }

  isVideo(val: any): boolean { 
    return val.isVideo; 
  }

  isPath(val: any): boolean { 
    return val instanceof ImgPath; 
  }
  
  getPath(val: any): string {
    return val.path;
  }

  getMaxWidth(val: any): string | undefined {
    return val.maxWidth;
  }

  getMaxHeight(val: any): string | undefined {
    return val.maxHeight;
  }

  getText(val: any): string {
    return val.text;
  }

  isRichText(val: any): boolean {
    return val.isRichText === true;
  }

  getRichContent(val: any): any[] {
    return val.richContent || [];
  }

  onImageError(event: any): void {
    console.log('Image failed to load:', event.target.src);
    // Try different fallback images in order of preference
    const fallbackImages = [
      'assets/img/favicon.png',
      'assets/img/triangle-mosaic.png',
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjlmOWY5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='
    ];

    // Try the first fallback image if it's not already being used
    if (!event.target.hasAttribute('data-fallback-tried')) {
      event.target.setAttribute('data-fallback-tried', 'true');
      event.target.src = fallbackImages[0];
    } else if (!event.target.hasAttribute('data-fallback-tried-2')) {
      event.target.setAttribute('data-fallback-tried-2', 'true');
      event.target.src = fallbackImages[1];
    } else {
      // Use SVG placeholder as last resort
      event.target.src = fallbackImages[2];
    }
  }

  onVideoError(event: any): void {
    console.log('Video failed to load:', event.target.src);
    this.videoError = true;
  }

  onVideoLoadStart(event: any): void {
    console.log('Video loading started:', event.target.src);
    this.videoError = false;
  }
}
