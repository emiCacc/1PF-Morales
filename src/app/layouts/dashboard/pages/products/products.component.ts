import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from './models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns = ['id','name','price','actions'];

  products: IProduct[] = [];

  constructor( private productService: ProductsService ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
