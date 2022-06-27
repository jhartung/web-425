/*
============================================
; Title: Exercise 6.2 - Input/Output Properties, Part 1
; Author: Professor Krasso
; Date: 27 June 2022
; Modified By: Joel Hartung
; Title: Exercise 6.2 - Input/Output Properties, Part 1
; Code Attribution: Additional code from WEB 425 Week 6 exercises and videos
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string;
  constructor() {
    this.assignment = 'Exercise 6.2 - Input/Output Properties, Part 1' // assignment title
  }
}
