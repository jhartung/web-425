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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
