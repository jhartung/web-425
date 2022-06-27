/*
============================================
; Title: Exercise 6.2 - Input/Output Properties, Part 1
; Author: Professor Krasso
; Date: 27 June 2022
; Modified By: Joel Hartung
; Title: Exercise 6.2 - Input/Output Properties, Part 1
; Code Attribution: Additional code from WEB 425 Week 6 exercises and videos
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
