import { FilmsService } from '@core/services/films.service';
import { UsersService } from '@core/services/users.service';
import { Component, OnInit } from '@angular/core';
import { ACTIVE_FILTERS } from '@core/constants/filters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //fimlItems: Array<IMenuItem> = shopFilmItems;
  listOne;
  listTwo;
  constructor(private usersApi: UsersService, private films: FilmsService) {}
  
  ngOnInit(): void {
    this.films.getBy(
      1, 10, ACTIVE_FILTERS.ACTIVE
    ).subscribe(result => {
      console.log('peliculas en cartelera', result);
      this.listOne = result;
      this.listTwo = result;
    });
    this.usersApi.getUsers(2,1).subscribe((result) => {
      console.log(result);
    });
  }
}
