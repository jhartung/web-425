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

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// variables

  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;
  transcriptForm: FormGroup;


  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.transcriptForm = this.fb.group({ course: ['', Validators.required ], grade: ['', Validators.required]});
  }

  // get form function
  get form() { return this.transcriptForm.controls; }

  // saves course and grade info to transcript on submit
  onSubmit(event: { currentTarget: { reset: () => void; }; }) {
    this.transcriptEntries.push({
      course: this.form['course'].value,
      grade: this.form['grade'].value
    });
    event.currentTarget.reset();
  }

  // function to calculate GPA
  calculateResults() {
    let gpa: number = 0;

    for (let entry of this.transcriptEntries) {
      switch(entry.grade) {
        case 'A':
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C':
          gpa += 2.00;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += .70;
          break;
        default:
          gpa += 0.00;
          break;
      }
    }

    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  // function to clear transcript and GPA total
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }

}
