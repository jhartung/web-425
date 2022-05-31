/*
============================================
; Title: Assignment 2.2 - Navigation
; Author: Professor Krasso
; Date: 31 May 2022
; Modified By: Joel Hartung
; Description: Assignment 2.2 - Navigation
; Code Attribution: Additional code from WEB 425 Week 2 exercises and videos
;===========================================
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  {path: '',
  component: HomeComponent
  },
  {path: 'home',
  component: HomeComponent
  },
  {path: 'contact',
  component: ContactComponent
  },
  {path: 'about',
  component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
