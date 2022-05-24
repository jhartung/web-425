/*
============================================
; Title: Exercise 1.4 - TypeScript
; Author: Professor Krasso
; Date: 24 May 2022
; Modified By: Joel Hartung
; Description: Exercise 1.4 - TypeScript
; Code Attribution: Additional code from WEB 425 Exercise 1.4 documentation & video
;===========================================
*/

import { IPerson } from "./person.interface";

class Person implements IPerson {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Joel", "Hartung");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);

