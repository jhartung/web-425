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


// import statements
import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  // variables
  signinForm: FormGroup;
  errorMessage: string;


  constructor(private Router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({ studentId: ''})
  }

  // login and validates student ID. Shows errorMessage if invalid ID
  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1)
      this.Router.navigate(['/'])
    } else {
      this.errorMessage = `The student ID you entered is invalid, please try again.`;
    }
  }
}
