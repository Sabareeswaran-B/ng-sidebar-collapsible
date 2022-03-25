import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgSidenavComponent } from './ng-sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgSidenavComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
  ],
  exports: [
    NgSidenavComponent
  ]
})
export class NgSidenavModule { }
