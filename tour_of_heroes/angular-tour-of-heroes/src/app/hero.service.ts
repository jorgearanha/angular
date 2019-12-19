import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  constructor() { }
}
