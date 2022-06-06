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

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment = 'Exercise 3.2 - Passing Data to Routes, Part 1'; // Assignment title
}
