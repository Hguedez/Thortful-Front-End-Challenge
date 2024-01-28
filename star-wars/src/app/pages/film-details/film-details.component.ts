import { Component, OnInit } from '@angular/core';
import{ FilmsService } from '../../core/services/films.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit{
  
  film_Id:number = 0
  response:any = {}
  loaded:boolean = false
  selectedRating = 0;
  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star',
      tooltip: '1'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star',
      tooltip: '2'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star',
      tooltip: '3'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star',
      tooltip: '4'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star',
      tooltip: '5'
    }

  ];
  constructor(
    private filmsService: FilmsService, 
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.film_Id = +params['id']; 
      this.getFilm(this.film_Id)
    });
  }

  getFilm(filmId: number) {
    this.filmsService.getFilm(filmId)
    .subscribe({
      next: res => {
        this.response = res
        this.loaded = true
        console.log(this.response)
      },
      error: err => {
        console.log(err);
      }
    });
  }

  selectStar(value:any): void{

    // prevent multiple selection
    if ( this.selectedRating === 0){

      this.stars.filter( (star) => {

        if ( star.id <= value){

          star.class = 'star-gold star';

        }else{

          star.class = 'star-gray star';

        }

        return star;
      });

    }
    this.selectedRating = value
    
  }
  

}
