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

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment = 'Exercise 4.2 - Inversion of Control and Dependency Injection'; // Assignment title
}
