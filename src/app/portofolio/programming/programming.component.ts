import { Component, OnInit } from '@angular/core';
import { PROGRAMMING } from 'src/app/project.list';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['../main/main.component.css']
})
export class ProgrammingComponent implements OnInit {
  programming;

  constructor() { 
    this.programming = PROGRAMMING;
  }

  ngOnInit(): void {
  }

}
