import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { FilmsComponent } from './films/films.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { PagesComponent } from './pages.component';
import { NavbarService } from '../core/services/navbar.service'

@NgModule({
  declarations: [
    FilmsComponent,
    FilmDetailsComponent,
    PagesComponent
  ],
  providers: [NavbarService],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
