import { Component } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  selectedComponent: string = 'students';
  showFiller = false;
  qualifications = false;

  constructor(
    private authService: AuthService
  ) {}

  ngAfterViewChecked() {
    this.scrollToTop();
  }
  
  scrollToTop() {
    window.scrollTo(0, 0);
  }
 
  selectComponent(component: string): void {
    this.selectedComponent = component;
    if (component === 'asignatures' || component === 'qualifications') {
      this.qualifications = true; 
    } else {
      this.qualifications = false;
    }
  }
  
  
// Determines if the screen is a smartphone screen (less than 280px). 
isMobile(): boolean {
  return window.innerWidth <= 280;
}

showQualifications(): void {
  this.qualifications = true;
}

logout() {
  this.authService.logout();
}

}
