import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselMenModule } from './carousel-men/carousel-men.module';
import { NgbdCarouselWomenModule } from './carousel-women/carousel-women.module';
import { NgbdSizeDropdownModule } from './size-dropdown/size-dropdown.module';
import { ClothesComponent } from './clothes.component';

@NgModule({
  declarations: [ClothesComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgbdCarouselMenModule,
    NgbdCarouselWomenModule,
    NgbdSizeDropdownModule
  ],
  providers: [],
  exports: [ClothesComponent]
})

export class ClothesModule { }
