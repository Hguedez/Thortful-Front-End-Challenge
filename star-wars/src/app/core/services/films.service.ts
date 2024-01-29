import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsService extends ApiService{
  /**
   * [Make API call for getting a specific film]
   * @param film_Id [Id of the film you want to get]
   * @return response
   */
  getFilm(film_Id: number){
    return this.http.get(this.API_URL+'films/'+film_Id, this.httpOptions);
  }
}
