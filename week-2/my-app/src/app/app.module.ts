/*
============================================
; Title: Assignment 2.2 - Navigation
; Author: Professor Krasso
; Date: 31 May 2022
; Modified By: Joel Hartung
; Description: Assignment 2.2 - Navigation
; Code Attribution: Additional code from WEB 425 Week 2 exercises and videos
;===========================================
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
