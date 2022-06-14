/*
============================================
; Title: Assignment 4.4 - Async Pipe
; Author: Professor Krasso
; Date: 13 June 2022
; Modified By: Joel Hartung
; Title: Assignment 4.4 - Async Pipe
; Code Attribution: Additional code from WEB 425 Week 4 exercises and videos
;===========================================
*/

// import statememts
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId')!, 10);

    // checks to see if composerId has a value
    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {
  }

}
