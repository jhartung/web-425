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

// IBook interface for book objects
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
