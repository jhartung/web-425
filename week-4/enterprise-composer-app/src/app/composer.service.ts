/*
============================================
; Title: Assignment 4.4 - Async Pipe
; Author: Professor Krasso
; Date: 13 June 2022
; Modified By: Joel Hartung
; Title: Assignment 4.4 - Async Pipe
; Code Attribution: Additional code from WEB 425 Week 4 exercises and videos
;===========================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;


  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Johann Sebastian Bach", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Danny Elfman", genre: "Film"
      },
      {
        composerId: 102, fullName: "Wolfgang Amadaus Mozart", genre: "Classical"
      },
      {
        composerId: 103, fullName: "John Carpenter", genre: "Film"
      },
      {
        composerId: 104, fullName: "Ludwig van Beethoven", genre: "Classical"
      }
    ]
  }

  // Returns an observable array of composers
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }

  // Filters the composer array by name
  filterComposers(name: string): Observable<IComposer[]> {
    return of (this.composers).pipe(
      map(composers =>
        composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}


