import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  constructor(private router: Router) {}

  /**
   * [Redirect user to films details interface]
   * @param id [Id of the specific film you want to see]
   */
  goToFilm(id:number){
    this.router.navigate(['pages/details', id]);
  }
}
