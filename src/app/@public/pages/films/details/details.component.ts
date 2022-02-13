import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '@core/services/films.service';
import { Component, OnInit } from '@angular/core';
import { CURRENCIES_SYMBOL, CURRENCY_LIST } from '@mugan86/ng-shop-ui';
import { IfilmItem } from '@core/interfaces/film-home.interface';
import { loadData, closeAlert } from '@shared/alerts/alerts';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  product: IfilmItem;
  //= products[Math.floor(Math.random() * products.length)];
  selectImage: string;
  platform: string;
  loading: boolean;
  relationalFilms: Array<Object> = [];
  currency = CURRENCIES_SYMBOL[CURRENCY_LIST.COLOMBIAN_PESO];
  constructor(private filmService: FilmsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe((params) => {
      loadData('Cargando Datos', '');
      this.loading = true;
      this.loadDataValue(+params.id);
    });
  }

  loadDataValue (id: number) {
    this.filmService.getItem(String(id)).subscribe( result => {
      console.log(result);
      this.product = result.films;
      this.selectImage = this.product.poster;
      this.relationalFilms = result.relational;
      this.platform = result.platform.name;
      this.loading = false;
      closeAlert();
    });
  }
  changeValue(qty: number){
    console.log(qty);
  }

  selectOtherPlatform($event) {
    this.loadDataValue(+$event.target.value);
  }
}
