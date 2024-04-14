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
    //• Inyeccion useExisting •
    ProductsService
    
    //• Inyeccion useClass •
    // Se utiliza por ejemplo cuando se empieza un proyecto nuevo y no tenemos tiempo
    // de esperar los endpoints del backend.
    // {
    //   provide: ProductsService,     // 1) Se pide el ProductService pero...
    //   useClass: ProductsService // 2) Se carga el ProductMockService!
    // },
  
    //• Inyeccion useValue •
    // Se utiliza cuando queremos inyectar una propiedad o valor como una inyeccion de dependencias
    // {
    //   provide: API_URL,
    //   useValue: 'http://localhost:4200/api',
    // },

    //• Inyeccion useFactory •
    //
    // {
    //   provide: RANDOM_NUMBER,
    //   useFactory: () => {
    //     return Math.random();
    //   }
    // }
  ],
})
export class ProductsModule { }
