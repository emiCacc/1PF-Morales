import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showFiller = false;
 
// Determines if the screen is a smartphone screen (less than 280px). 
isMobile(): boolean {
  return window.innerWidth <= 280;
}

}
