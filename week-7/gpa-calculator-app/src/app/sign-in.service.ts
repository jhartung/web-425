/*
============================================
; Title: Exercise 7.3 - Form Validation
; Author: Professor Krasso
; Date: 6 July 2022
; Modified By: Joel Hartung
; Title: Exercise 7.3 - Form Validation
; Code Attribution: Additional code from WEB 425 Week 6 exercises and videos
;===========================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  // student ID's allowed to sign in
  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  // validates that the student ID is a number and that the id matches
  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
