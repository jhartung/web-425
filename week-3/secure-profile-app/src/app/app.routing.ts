/*
============================================
; Title: Exercise 3.3 - Passing Data to Routes, Part 2
; Author: Professor Krasso
; Date: 6 June 2022
; Modified By: Joel Hartung
; Description: Exercise 3.3 - Passing Data to Routes, Part 2
; Code Attribution: Additional code from WEB 425 Week 3 exercises and videos
;===========================================
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
  path: 'home',
  component: HomeComponent
  }
]
