/*
============================================
; Title: Assignment 2.4 - Routing in Action
; Author: Professor Krasso
; Date: 31 May 2022
; Modified By: Joel Hartung
; Description: Assignment 2.4 - Routing in Action
; Code Attribution: Additional code from WEB 425 Week 2 exercises and videos
;===========================================
*/

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Danny Elfman", "Film"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("John Carpenter", "Film"),
      new Composer("Ludwig van Beethoven", "Classical")
    ]
   }

  ngOnInit(): void {
  }

}
