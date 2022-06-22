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
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
// defines books, header, and book
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook | undefined;

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
   }

  ngOnInit(): void {
  }
// function to show book details
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }

}
