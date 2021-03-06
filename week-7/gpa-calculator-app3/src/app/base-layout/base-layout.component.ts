/*
============================================
; Title: Exercise 7.2 - Reactive Forms
; Author: Professor Krasso
; Date: 5 July 2022
; Modified By: Joel Hartung
; Title: Exercise 7.2 - Reactive Forms
; Code Attribution: Additional code from WEB 425 Week 6 exercises and videos
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'Exercise 7.2 - Reactive Forms';
  }

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

  ngOnInit(): void {
  }

}
