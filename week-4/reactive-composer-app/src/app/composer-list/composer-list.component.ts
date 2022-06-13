/*
============================================
; Title: Exercise 4.3 - Handling Events with Observables
; Author: Professor Krasso
; Date: 13 June 2022
; Modified By: Joel Hartung
; Title: Exercise 4.3 - Handling Events with Observables
; Code Attribution: Additional code from WEB 425 Week 4 exercises and videos
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // composers array
  composers: Array<IComposer>;
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));

   }

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    alert(name);
  }

}
