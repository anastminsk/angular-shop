import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSizeDropdown } from './size-dropdown.component';

@NgModule({
  declarations: [NgbdSizeDropdown],
  imports: [
    CommonModule,
    NgbModule
  ],
  providers: [],
  exports: [NgbdSizeDropdown]
})

export class NgbdSizeDropdownModule { }
