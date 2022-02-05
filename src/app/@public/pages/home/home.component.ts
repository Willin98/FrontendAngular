import { FilmsService } from './../../../@core/services/films.service';
import { UsersService } from '@core/services/users.service';
import { Component, OnInit } from '@angular/core';
import { ICarouselItem } from '@mugan86/ng-shop-ui/lib/interfaces/carousel-item.interface';
import carouselItems from '@data/carousel.json';
import productsList from '@data/products.json'
import { ACTIVE_FILTERS } from '@core/constants/filters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: ICarouselItem[] = [];
  productsList;
  listOne;
  listTwo;
  constructor(private usersApi: UsersService, private films: FilmsService) {}
  
  ngOnInit(): void {
    this.productsList = productsList;
    this.listTwo = productsList;
    this.items = carouselItems;
    this.films.getBy(
      1, 10, ACTIVE_FILTERS.ACTIVE
    ).subscribe(result => {
      console.log('peliculas en cartelera', result);
      this.listOne = result;
    });
    this.usersApi.getUsers(2,1).subscribe((result) => {
      console.log(result);
    });
  }
}
