/*
============================================
; Title: Assignment 2.4 - Routing in Action
; Author: Professor Krasso
; Date: 31 May 2022
; Modified By: Joel Hartung
; Description: Assignment 2.4 - Routing in Action
; Code Attribution: Additional code from WEB 425 Week 2 exercises and videos
;===========================================
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

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
