/*
============================================
; Title: Assignment 6.4 - Input Properties
; Author: Professor Krasso
; Date: 28 June 2022
; Modified By: Joel Hartung
; Title: Assignment 6.4 - Input Properties
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
