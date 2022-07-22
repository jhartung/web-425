/*
============================================
; Title: Assignment 8.2 - Server-side Communications
; Author: Professor Krasso
; Date: 12 July 2022
; Modified By: Joel Hartung
; Title: Assignment 8.2 - Server-side Communications
; Code Attribution: Additional code from WEB 425 Week 8 assignment
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
