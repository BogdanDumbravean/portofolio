import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ImgPath, Text, Project, MyArrayType, RichTextSegment } from 'src/app/project.model';
import { ProjectService } from 'src/app/services/project.service';

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

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private location: Location, 
    private projectService: ProjectService,
    private titleService: Title
  ) {
  }

  ngOnInit(): void {
    // Subscribe to route parameter changes to handle navigation between projects
    this.route.params.subscribe(params => {
      const list = params['list'];
      const id = +params['id'];
      this.loadProject(list, id);
    });
  }

  loadProject(list: string, id: number): void {
    this.currentIndex = id;
    this.projectType = list;
    
    // Reset video error state
    this.videoError = false;
    
    console.log('Loading project:', this.projectType, this.currentIndex);
    
    this.projectService.getProject(this.projectType, this.currentIndex).subscribe(project => {
      if (project) {
        this.project = project;
        this.titleService.setTitle(`${project.title} - Bogdan Dumbrăvean`);
      } else {
        this.project = new Project("Project Not Found", "", "The requested project could not be found.", []);
        this.titleService.setTitle("Project Not Found - Bogdan Dumbrăvean");
      }
    });

    let listObservable;
    if (this.projectType === "programming") {
      listObservable = this.projectService.getProgrammingProjects();
    } else if (this.projectType === "games") {
      listObservable = this.projectService.getGamesProjects();
    }

    if (listObservable) {
      listObservable.subscribe(list => {
        this.projectsList = list;
        this.hasPrevious = this.currentIndex > 0;
        this.hasNext = this.currentIndex < this.projectsList.length - 1;
      });
    } else {
        this.projectsList = [];
        this.hasPrevious = false;
        this.hasNext = false;
    }
  }

  isLink(val: MyArrayType): boolean { 
    return (val instanceof Text) && val.isLink; 
  }

  isVideo(val: MyArrayType): boolean { 
    return (val instanceof ImgPath) && val.isVideo; 
  }

  isPath(val: MyArrayType): val is ImgPath { 
    return val instanceof ImgPath; 
  }
  
  getPath(val: MyArrayType): string {
    return (val instanceof ImgPath) ? val.path : '';
  }

  getMaxWidth(val: MyArrayType): string | undefined {
    return (val instanceof ImgPath) ? val.maxWidth : undefined;
  }

  getMaxHeight(val: MyArrayType): string | undefined {
    return (val instanceof ImgPath) ? val.maxHeight : undefined;
  }

  getText(val: MyArrayType): string {
    return (val instanceof Text) ? val.text : '';
  }

  isRichText(val: MyArrayType): boolean {
    return (val instanceof Text) && (val.isRichText === true);
  }

  getRichContent(val: MyArrayType): RichTextSegment[] {
    return (val instanceof Text && val.richContent) ? val.richContent : [];
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
