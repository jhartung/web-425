/*
============================================
; Title: Exercise 1.3 - Hello World
; Author: Professor Krasso
; Date: 24 May 2022
; Modified By: Joel Hartung
; Description: Hello World
; Code Attribution: Additional code from WEB 425 Exercise 1.3 documentation & video
;===========================================
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Joel Hartung's world!"
}
