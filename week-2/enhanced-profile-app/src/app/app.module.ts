/*
============================================
; Title: Assignment 2.3 - Data Binding
; Author: Professor Krasso
; Date: 31 May 2022
; Modified By: Joel Hartung
; Description: Assignment 2.3 - Data Binding
; Code Attribution: Additional code from WEB 425 Week 2 exercises and videos
;===========================================
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
