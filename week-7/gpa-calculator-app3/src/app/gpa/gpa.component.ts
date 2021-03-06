/*
============================================
; Title: Exercise 7.2 - Reactive Forms
; Author: Professor Krasso
; Date: 5 July 2022
; Modified By: Joel Hartung
; Title: Exercise 7.2 - Reactive Forms
; Code Attribution: Additional code from WEB 425 Week 6 exercises and videos
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

// @Input for gpa total
  @Input()
  gpaTotal!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
