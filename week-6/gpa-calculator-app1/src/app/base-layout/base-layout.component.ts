/*
============================================
; Title: Exercise 6.3 - Layouts
; Author: Professor Krasso
; Date: 28 June 2022
; Modified By: Joel Hartung
; Title: Exercise 6.3 - Layouts
; Code Attribution: Additional code from WEB 425 Week 6 exercises and videos
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts';
  }

  ngOnInit(): void {
  }

}
