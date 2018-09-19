import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselWomen } from './carousel-women.component';
import { NgbdDropdownModule } from '../dropdown/dropdown.module';
import { NgbdSizeDropdownModule } from '../size-dropdown/size-dropdown.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NgbdCarouselWomen],
  imports: [
    CommonModule,
    NgbModule,
    NgbdDropdownModule,
    NgbdSizeDropdownModule,
    RouterModule
  ],
  providers: [],
  exports: [NgbdCarouselWomen]
})

export class NgbdCarouselWomenModule { }
