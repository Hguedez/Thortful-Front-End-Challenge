import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  constructor(private router: Router) {}

  /**
   * [Move screen to a specific div]
   * @param elementId [id of the div]
   */
  scrollToElement(elementId: string): void {
    this.goToFilm();
    setTimeout(() => {
      const element = document.getElementById(elementId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
   /**
   * [Redirect user to film interface]
   */
  goToFilm(){
    this.router.navigate(['/']);
  }
}
