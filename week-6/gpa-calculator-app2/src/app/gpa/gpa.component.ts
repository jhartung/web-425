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
