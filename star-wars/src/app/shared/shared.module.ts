import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapModule } from './bootstrap/bootstrap.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BootstrapModule,

  ],
  exports: [
    BootstrapModule,
    
  ]
})
export class SharedModule { }
