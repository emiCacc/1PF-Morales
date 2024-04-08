import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showFiller = false;
 
//Determina si la pantalla del dispositivo es un celular (menor a 280px) o no.  
isMobile(): boolean {
  return window.innerWidth <= 280;
}

}
