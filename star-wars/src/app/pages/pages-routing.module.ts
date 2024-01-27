import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';


const routes: Routes = [
    { path: '', redirectTo: 'films', pathMatch: 'full' },
    { path: 'films', component: FilmsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
