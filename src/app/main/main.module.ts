import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterModule } from './filter/filter.module';
import { ClothesModule } from './clothes/clothes.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    FilterModule,
    ClothesModule
  ],
  providers: [],
  exports: [MainComponent]
})

export class MainModule { }