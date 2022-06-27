/*
============================================
; Title: Assignment 5.4 - Dialogs
; Author: Professor Krasso
; Date: 22 June 2022
; Modified By: Joel Hartung
; Title:Assignment 5.4 - Dialogs
; Code Attribution: Additional code from WEB 425 Week 5 exercises and videos
;===========================================
*/
// import statements
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';



@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {

  book: IBook;

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.book = data.book;
   }

  ngOnInit(): void {
  }

}
