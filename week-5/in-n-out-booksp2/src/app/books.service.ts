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

// import statements
import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
// defines books as an array of IBook objects
  books: Array<IBook>;

// populates the books array with book information
  constructor() {
    this.books = [
      {
        isbn: '0670032549 ',
        title: 'The Gunslinger',
        description: 'The Dark Tower, Book 1',
        numOfPages: 231,
        authors: ['Stephen King']
      },
      {
        isbn:'1416596135',
        title: 'Consumed',
        description:'The exhilarating debut novel by iconic filmmaker David Cronenberg: the story of two journalists whose entanglement in a French philosopher’s death becomes a surreal journey into global conspiracy.',
        numOfPages: 320,
        authors: ['David Cronenberg']
      },
      {
        isbn: '1617933082',
        title: 'Ghost Story',
        description: 'In the sleepy town of Milburn, New York, four old men gather to tell each other stories—some true, some made-up, all of them frightening.',
        numOfPages: 415,
        authors: ['Peter Straub']
      },
      {
        isbn: '0316017442',
        title: 'The Terror',
        description: 'The men on board HMS Terror are stranded in a nightmarish landscape of encroaching ice and darkness. Endlessly cold, with diminishing rations, 126 men fight to survive with poisonous food, a dwindling supply of coal, and ships buckling in the grip of crushing ice.',
        numOfPages: 784,
        authors: ['Dan Simmons']
      },
      {
        isbn:'0062094351',
        title:'The Exorcist',
        description: 'William Peter Blattys groundbreaking story of faith and supernatural suspense',
        numOfPages: 400,
        authors: ['William Peter Blatty']
      }
    ]
   }

   getBooks(): Observable<IBook[]> {
    return of(this.books);
   }

   getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
   }
}
