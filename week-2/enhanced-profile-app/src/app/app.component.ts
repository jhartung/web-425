/*
============================================
; Title: Assignment 2.3 - Data Binding
; Author: Professor Krasso
; Date: 31 May 2022
; Modified By: Joel Hartung
; Description: Assignment 2.3 - Data Binding
; Code Attribution: Additional code from WEB 425 Week 2 exercises and videos
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment:string = 'Assignment 2.3 - Data Binding';
}
