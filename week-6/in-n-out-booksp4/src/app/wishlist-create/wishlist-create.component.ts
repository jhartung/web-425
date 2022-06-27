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

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {

  item: IWishlistItem;

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

  addItem() {
    this.addItemEmitter.emit({ title: this.item.title, authors: this.item.authors})
    this.item = {} as IWishlistItem;
  }

}
