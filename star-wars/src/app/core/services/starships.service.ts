import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService extends ApiService{

  getStarShip(starshipUrl: string){
    return this.http.get(starshipUrl, this.httpOptions);
  }
  
}
