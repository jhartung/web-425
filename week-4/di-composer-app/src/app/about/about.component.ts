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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
