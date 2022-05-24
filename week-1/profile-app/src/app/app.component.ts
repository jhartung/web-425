/*
============================================
; Title: Assignment 1.5 - Components
; Author: Professor Krasso
; Date: 24 May 2022
; Modified By: Joel Hartung
; Description: Assignment 1.5 - Components
; Code Attribution: Additional code from WEB 425 Week 1 exercises and videos
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment:string = 'Assignment 1.5 - Components';
}
