import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDropdown } from './dropdown.component';

@NgModule({
  declarations: [NgbdDropdown],
  imports: [
    CommonModule,
    NgbModule
  ],
  providers: [],
  exports: [NgbdDropdown]
})

export class NgbdDropdownModule { }
