/*
============================================
; Title: Exercise 3.2 - Passing Data to Routes, Part 1
; Author: Professor Krasso
; Date: 6 June 2022
; Modified By: Joel Hartung
; Description: Exercise 3.2 - Passing Data to Routes, Part 1
; Code Attribution: Additional code from WEB 425 Week 3 exercises and videos
;===========================================
*/

// import IComposer interface
import { IComposer } from './composer.interface';

// create and export Composer class
export class Composer {

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
