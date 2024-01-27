import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { FilmsComponent } from './films/films.component';
import { FilmDetailsComponent } from './film-details/film-details.component';


@NgModule({
  declarations: [
    FilmsComponent,
    FilmDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
