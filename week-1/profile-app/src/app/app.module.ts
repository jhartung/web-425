/*
============================================
; Title: Assignment 1.5 - Components
; Author: Professor Krasso
; Date: 24 May 2022
; Modified By: Joel Hartung
; Description: Assignment 1.5 - Components
; Code Attribution: Additional code from WEB 425 Week 1 exercises and videos
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
