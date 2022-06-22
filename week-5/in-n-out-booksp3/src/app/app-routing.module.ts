/*
============================================
; Title: Assignment 5.4 - Dialogs
; Author: Professor Krasso
; Date: 22 June 2022
; Modified By: Joel Hartung
; Title:Assignment 5.4 - Dialogs
; Code Attribution: Additional code from WEB 425 Week 5 exercises and videos
;===========================================
*/

// import statements
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';

// routes
const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
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
export class AppRoutingModule { }
