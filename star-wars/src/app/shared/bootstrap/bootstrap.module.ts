import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

const BOOTSTRAP_MODULES = [
  CommonModule,
  NgbNavModule,
  NgbDropdownModule,
  NgbCarouselModule
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
