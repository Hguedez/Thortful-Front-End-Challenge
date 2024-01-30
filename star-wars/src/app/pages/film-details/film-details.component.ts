import { Component, OnInit, OnDestroy  } from '@angular/core';
import{ FilmsService } from '../../core/services/films.service'
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { StarshipsService } from '../../core/services/starships.service'
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NavbarService } from '../../core/services/navbar.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit, OnDestroy {
  
  film_Id:number = 0
  film:any = {}
  ship:any = {}
  loaded:boolean = false
  slideIndex:number = 0
  closeResult = '';
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
    private starShipsService: StarshipsService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private navbarService: NavbarService
  ) {}

  ngOnInit(): void {
    //window.scrollTo(0, 0);
    setTimeout(() => {
      this.navbarService.setShowNavbar(false);
    });
    this.route.params.subscribe(params => {
      this.film_Id = +params['id']; 
      this.getFilm(this.film_Id)
    });
  }

  ngOnDestroy() {
    setTimeout(() => {
      this.navbarService.setShowNavbar(true);
    });
  }
  
  /**
   * [Show pop up messages to the user]
   * @param message [text to be displayed]
   * @param icon [icon to display in the pop up]
   */
  showMessage(message:any, icon:any){
    Swal.fire({
      icon: icon,
      title: message,
      showConfirmButton: false,
    })
  }

  /**
   * [Get specifil star wars film]
   * @param filmId [id of the film]
   */
  getFilm(filmId: number) {
    this.filmsService.getFilm(filmId)
    .subscribe({
      next: res => {
        this.film = res
        this.loaded = true
      },
      error: err => {
        this.showMessage('Something went wrong', 'error')
      }
    });
  }

  /**
   * [Get specific starship from a film inside a modal]
   * @param starshipUrl [url of the starship to make the api call]
   * @param action [action of the modal if next or back]
   * @param content [event triggered cause of modal]
   */
  getStarShip(starshipUrl:string, action:string = '', content:any = {},){
    this.starShipsService.getStarShip(starshipUrl)
    .subscribe({
      next: res => {
        this.ship = res
        if(action !== "next" && action !== "back"){
          this.openModal(content)
        }
      },
      error: err => {
        this.showMessage('Something went wrong', 'error')
      }
    });
  }

  /**
   * [Control which slides of the carousel are going to be shown]
   * @param action [action of the carousel if next or back]
   * @param content [event triggered cause of modal]
   */
  controlSlidePage(action:string, content:any){
    this.ship = {}
    if(action === "next" && this.film.starships[this.slideIndex+1]){
      this.slideIndex++
      this.getStarShip(this.film.starships[this.slideIndex],action)
    }
    else if(action == "back" && this.film.starships[this.slideIndex-1]){
      this.slideIndex--
      this.getStarShip(this.film.starships[this.slideIndex],action)
    }
    else if(action == "next" && !this.film.starships[this.slideIndex+1]){
      this.slideIndex = 0
      this.getStarShip(this.film.starships[this.slideIndex],action)
    }
    else if(action == "back" && !this.film.starships[this.slideIndex-1]){
      this.slideIndex = this.film.starships.length - 1
      this.getStarShip(this.film.starships[this.slideIndex],action)
    }
    else {
      this.slideIndex = 0
      this.getStarShip(this.film.starships[this.slideIndex],'',content)
    }
  }

  openModal(content:any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
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
