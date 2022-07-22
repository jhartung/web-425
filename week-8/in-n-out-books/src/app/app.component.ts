/*
============================================
; Title: Assignment 8.2 - Server-side Communications
; Author: Professor Krasso
; Date: 12 July 2022
; Modified By: Joel Hartung
; Title: Assignment 8.2 - Server-side Communications
; Code Attribution: Additional code from WEB 425 Week 8 assignment
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
    this.assignment = 'Welcome to In-N-Out-Books' // assignment title
  }
}
