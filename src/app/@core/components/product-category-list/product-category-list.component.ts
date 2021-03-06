import { Component, Input } from '@angular/core';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.scss']
})
export class ProductCategoryListComponent {
  @Input() title = 'Titulo de la categoria';
  @Input() productsList: Array<IProduct> = [];
  constructor() { }

  addToCart($event: IProduct){
    console.log('add to cart', $event)
  }
  showProductDetails($event: IProduct){
    console.log('add to cart', $event)
  }

}
