import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService extends ApiService{
  /**
   * [Make API call for getting a starship from a film]
   * @param starshipUrl [URL of the route for getting the starship]
   * @return response
   */
  getStarShip(starshipUrl: string){
    return this.http.get(starshipUrl, this.httpOptions);
  }
  
}
