import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule, NgbCarouselModule, NgbTooltip, } from '@ng-bootstrap/ng-bootstrap';

const BOOTSTRAP_MODULES = [
  CommonModule,
  NgbNavModule,
  NgbDropdownModule,
  NgbCarouselModule,
  NgbTooltip
]



@NgModule({
  declarations: [],
  imports: [
    ...BOOTSTRAP_MODULES
  ],
  exports: [
    ...BOOTSTRAP_MODULES
  ]
})
export class BootstrapModule { }
