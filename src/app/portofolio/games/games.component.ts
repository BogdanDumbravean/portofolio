import { Component, OnInit } from '@angular/core';
import { GAMES } from 'src/app/project.list';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['../main/main.component.css']
})
export class GamesComponent implements OnInit {
  games;

  constructor() { 
    this.games = GAMES;
  }

  ngOnInit(): void {
  }

}
