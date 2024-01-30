import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NavbarService {
    private showNavbar: BehaviorSubject<boolean>;

    constructor() {
        this.showNavbar = new BehaviorSubject(true);
    }

    getShowNavbar() {
        return this.showNavbar;
    }

    setShowNavbar(value: boolean) {
        this.showNavbar.next(value);
    }
}
