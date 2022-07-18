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
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(private route: ActivatedRoute, private location: Location) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const list = String(this.route.snapshot.paramMap.get('list'));
    
    if(list == "programming")
      this.project = PROGRAMMING[id];
    else if(list === "games")
      this.project = GAMES[id];
    else 
      this.project = new Project("", "", "", [])
  }

  ngOnInit(): void {
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

  getText(val: any): string {
    return val.text;
  }
}
