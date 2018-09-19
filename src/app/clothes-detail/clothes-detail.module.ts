import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClothesDetailComponent } from './clothes-detail.component';

@NgModule({
  declarations: [ClothesDetailComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [ClothesDetailComponent]
})

export class ClothesDetailModule { }
