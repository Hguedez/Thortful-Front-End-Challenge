import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsService extends ApiService{

  getFilm(film_Id: number){
    return this.http.get(this.API_URL+'films/'+film_Id, this.httpOptions);
  }
}
