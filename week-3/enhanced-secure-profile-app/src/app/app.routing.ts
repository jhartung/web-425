/*
============================================
; Title: Exercise 3.4 - Guarding Routes
; Author: Professor Krasso
; Date: 8 June 2022
; Modified By: Joel Hartung
; Description: Exercise 3.4 - Guarding Routes
; Code Attribution: Additional code from WEB 425 Week 3 exercises and videos
;===========================================
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard'; // Sign In Guard Import Statement

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
  path: 'home',
  component: HomeComponent,
  canActivate: [SignInGuard] // Adds sign in guard to home component
  }
]
