/*
============================================
; Title: Exercise 4.2 - Inversion of Control and Dependency Injection
; Author: Professor Krasso
; Date: 13 June 2022
; Modified By: Joel Hartung
; Title: Exercise 4.2 - Inversion of Control and Dependency Injection
; Code Attribution: Additional code from WEB 425 Week 4 exercises and videos
;===========================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

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

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}


  