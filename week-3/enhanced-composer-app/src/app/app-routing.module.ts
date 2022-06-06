/*
============================================
; Title: Exercise 3.2 - Passing Data to Routes, Part 1
; Author: Professor Krasso
; Date: 6 June 2022
; Modified By: Joel Hartung
; Description: Exercise 3.2 - Passing Data to Routes, Part 1
; Code Attribution: Additional code from WEB 425 Week 3 exercises and videos
;===========================================
*/


// Import statements
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

// Routes
const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent
  },
  {
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//Export statement
export class AppRoutingModule { }
