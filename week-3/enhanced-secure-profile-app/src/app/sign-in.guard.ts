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

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; // import statement for angular router

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  // added Router to the guards constructor
  constructor(private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // define isLoggedIn variable
      let isLoggedIn = next.queryParams['isLoggedIn'];

      if (isLoggedIn) {
        return true;
      } else {
        this.router.navigate(['/']); // navigates users back to sign in page if not logged in
        return false;
      }
  }

}
