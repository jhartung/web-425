/*
============================================
; Title: Exercise 3.3 - Passing Data to Routes, Part 2
; Author: Professor Krasso
; Date: 6 June 2022
; Modified By: Joel Hartung
; Description: Exercise 3.3 - Passing Data to Routes, Part 2
; Code Attribution: Additional code from WEB 425 Week 3 exercises and videos
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  assignment:string = 'Exercise 3.3 - Passing Data to Routes, Part 2';
}
