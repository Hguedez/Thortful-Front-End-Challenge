import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsService extends ApiService{

  getFilm(id: number){
    return this.http.get(this.API_URL+'films/'+id, this.httpOptions);
  }
}