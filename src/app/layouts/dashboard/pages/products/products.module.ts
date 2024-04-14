import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsService } from './products.service';
import { ProductsMockService } from './products-mock.service';

export const API_URL = new InjectionToken('API_URL'); //Utilizado con la Inyeccion useValue
export const RANDOM_NUMBER = new InjectionToken('RANDOM_NUMBER'); //Utilizado con la Inyeccion userFactory

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  exports: [ProductsComponent],

  providers: [
    ProductsService
  ],
})
export class ProductsModule { }
