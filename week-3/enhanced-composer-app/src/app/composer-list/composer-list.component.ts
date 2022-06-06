/*
============================================
; Title: Assignment 3.2 - Passing Data to Routes, Part 1
; Author: Professor Krasso
; Date: 6 June 2022
; Modified By: Joel Hartung
; Description: Assignment 3.2 - Passing Data to Routes, Part 1
; Code Attribution: Additional code from WEB 425 Week 2 exercises and videos
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // composers array
  composers: Array<IComposer>;

  constructor() {
    this.composers = new Composer().getComposers();
   }

  ngOnInit(): void {
  }

}
