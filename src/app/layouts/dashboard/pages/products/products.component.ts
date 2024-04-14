import { Component, Inject, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from './models';
import { API_URL, RANDOM_NUMBER } from './products.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns = ['id','name','price','actions'];

  products: IProduct[] = [];

  constructor( 
      private productsService: ProductsService,
  ) {
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
