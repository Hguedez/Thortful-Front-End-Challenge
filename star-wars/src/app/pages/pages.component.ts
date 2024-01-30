import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavbarService } from '../core/services/navbar.service';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  episodes = Array.from({length: 6}, (_, i) => `episode${i + 1}`);
  showNavbar: Observable<boolean>;
  constructor(private router: Router,private navbarService: NavbarService) {
    this.showNavbar = this.navbarService.getShowNavbar();
  }

  /**
   * [Move screen to a specific div]
   * @param elementId [id of the div]
   */
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
   /**
   * [Redirect user to film interface]
   */
  goToFilm(){
    this.router.navigate(['/']);
  }
}
