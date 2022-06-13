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
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // composers array
  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
   }

  ngOnInit(): void {
  }

}
