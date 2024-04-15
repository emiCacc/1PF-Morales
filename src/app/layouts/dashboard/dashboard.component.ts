import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  selectedComponent: string = 'students';
  showFiller = false;
 
  selectComponent(component: string) {
    this.selectedComponent = component;
  }
  
// Determines if the screen is a smartphone screen (less than 280px). 
isMobile(): boolean {
  return window.innerWidth <= 280;
}

}
