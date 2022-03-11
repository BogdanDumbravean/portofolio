import { Component, OnInit } from '@angular/core';
import { GAMES, PROGRAMMING } from 'src/app/project.list';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  programming;
  games;

  constructor() { 
    this.programming = PROGRAMMING.slice(0, 2);
    this.games = GAMES.slice(0, 2);
  }

  ngOnInit(): void {
  }

}
