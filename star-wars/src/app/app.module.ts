import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './pages/films/films.component';
import { FilmDetailsComponent } from './pages/film-details/film-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
