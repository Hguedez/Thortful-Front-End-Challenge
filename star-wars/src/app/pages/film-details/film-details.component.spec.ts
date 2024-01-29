import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailsComponent } from './film-details.component';
import Swal from 'sweetalert2';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from '../pages-routing.module';
import { StarshipsService } from '../../core/services/starships.service'
import { FilmsService } from '../../core/services/films.service'

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of,throwError } from 'rxjs'; 

describe('FilmDetailsComponent', () => {
  let component: FilmDetailsComponent;
  let filmsService: jasmine.SpyObj<FilmsService>;
  let starshipsService: jasmine.SpyObj<StarshipsService>;

  beforeEach(() => {
    // Create a mock FilmsService
    const filmsSpy = jasmine.createSpyObj('FilmsService', ['getFilm']);
    // Create a mock StarshipsService
    const starshipsSpy = jasmine.createSpyObj('StarshipsService', ['getStarShip']);

    TestBed.configureTestingModule({
      declarations: [FilmDetailsComponent],
      imports: [CommonModule, PagesRoutingModule, SharedModule, HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: StarshipsService, useValue: starshipsSpy }, { provide: FilmsService, useValue: filmsSpy }]
    });
    component = TestBed.createComponent(FilmDetailsComponent).componentInstance;
    filmsService = TestBed.inject(FilmsService) as jasmine.SpyObj<FilmsService>;
    starshipsService = TestBed.inject(StarshipsService) as jasmine.SpyObj<StarshipsService>;
  });

  // Test that getFilm sets film and loaded correctly on successful API call
  fit('should set film on successful getFilm call', () => {
    const expectedFilm = {
      "title": "The Phantom Menace", 
      "episode_id": 1, 
      "opening_crawl": "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....", 
      "director": "George Lucas", 
      "producer": "Rick McCallum", 
      "release_date": "1999-05-19",
      "starships": [
        "https://swapi.dev/api/starships/31/", 
        "https://swapi.dev/api/starships/32/", 
        "https://swapi.dev/api/starships/39/", 
        "https://swapi.dev/api/starships/40/", 
        "https://swapi.dev/api/starships/41/"
      ], 
    };  // The expected film object
    filmsService.getFilm.and.returnValue(of(expectedFilm)); // Mock the API call
    component.getFilm(1);
    expect(component.film).toBe(expectedFilm); // Check if film was set correctly
    expect(component.loaded).toBeTrue(); // Check if loaded was set to true
  });

  // Test that getFilm calls showMessage on error in API call
  fit('should call showMessage on error in getFilm call', () => {
    filmsService.getFilm.and.returnValue(throwError(new Error('Error message'))); // Mock the API call to return an error
    spyOn(component, 'showMessage');
    component.getFilm(1);
    expect(component.showMessage).toHaveBeenCalledWith('Something went wrong', 'error'); // Check if showMessage was called correctly
  });

  fit('should set ship on successful getStarShip call and open modal if action is not next or back', () => {
    const expectedShip = {
      "name": "Republic Cruiser", 
      "model": "Consular-class cruiser", 
      "manufacturer": "Corellian Engineering Corporation", 
      "cost_in_credits": "unknown", 
      "length": "115", 
      "max_atmosphering_speed": "900", 
      "crew": "9", 
      "passengers": "16", 
      "cargo_capacity": "unknown", 
      "consumables": "unknown", 
      "hyperdrive_rating": "2.0", 
      "MGLT": "unknown", 
      "starship_class": "Space cruiser",
    }; // The expected starship object
    const content = {}; // Replace with the content object
    starshipsService.getStarShip.and.returnValue(of(expectedShip));
    spyOn(component, 'openModal');
    component.getStarShip('starshipUrl', 'action', content);
    expect(component.ship).toBe(expectedShip);
    expect(component.openModal).toHaveBeenCalledWith(content);
  });

  fit('should call showMessage on error in getStarShip call', () => {
    const errorResponse = new Error('Error message');
    starshipsService.getStarShip.and.returnValue(throwError(errorResponse));
    spyOn(component, 'showMessage');
    component.getStarShip('starshipUrl', 'action', {});
    expect(component.showMessage).toHaveBeenCalledWith('Something went wrong', 'error');
  });
});



