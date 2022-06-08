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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  signin() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}
