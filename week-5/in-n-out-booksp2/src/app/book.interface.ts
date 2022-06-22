/*
============================================
; Title: Assignment 5.3 - Data Tables
; Author: Professor Krasso
; Date: 21 June 2022
; Modified By: Joel Hartung
; Title: Assignment 5.3 - Data Tables
; Code Attribution: Additional code from WEB 425 Week 5 exercises and videos
;===========================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
