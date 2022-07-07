/*
============================================
; Title: Exercise 7.3 - Form Validation
; Author: Professor Krasso
; Date: 6 July 2022
; Modified By: Joel Hartung
; Title: Exercise 7.3 - Form Validation
; Code Attribution: Additional code from WEB 425 Week 6 exercises and videos
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input()
  grade!: string;
  @Input()
  course!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
