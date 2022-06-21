/*
============================================
; Title: Assignment 5.2 - Navigation and Layout
; Author: Professor Krasso
; Date: 21 June 2022
; Modified By: Joel Hartung
; Title: Assignment 5.2 - Navigation and Layout
; Code Attribution: Additional code from WEB 425 Week 5 exercises and videos
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
    this.assignment = 'Exercise 5.3 - Navigation and Layout'
  }
}
