import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselMen } from './carousel-men.component';
import { NgbdDropdownModule } from '../dropdown/dropdown.module';
import { NgbdSizeDropdownModule } from '../size-dropdown/size-dropdown.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NgbdCarouselMen],
  imports: [
    CommonModule,
    NgbModule,
    NgbdDropdownModule,
    NgbdSizeDropdownModule,
    RouterModule
  ],
  providers: [],
  exports: [NgbdCarouselMen]
})

export class NgbdCarouselMenModule { }