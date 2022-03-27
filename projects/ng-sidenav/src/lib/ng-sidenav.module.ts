import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgSidenavComponent } from './ng-sidenav.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgSidenavComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [
    NgSidenavComponent
  ]
})
export class NgSidenavModule { }
