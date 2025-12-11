import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../project.model';
import { PROGRAMMING, GAMES } from '../project.list';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProgrammingProjects(): Observable<Project[]> {
    return of(PROGRAMMING);
  }

  getGamesProjects(): Observable<Project[]> {
    return of(GAMES);
  }

  getProject(type: string, index: number): Observable<Project | undefined> {
    if (type === 'programming') {
      return of(PROGRAMMING[index]);
    } else if (type === 'games') {
      return of(GAMES[index]);
    }
    return of(undefined);
  }
}
