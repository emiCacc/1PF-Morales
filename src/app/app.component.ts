import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pf1-morales';

ngOnInit(){
  this.noRCandDT();
}

noRCandDT() {
  // document.addEventListener('contextmenu', (event) => {
  //   event.preventDefault();
  // });
  // document.addEventListener('keydown', (event) => {
  //   if (event.key === 'F12' || (event.metaKey && event.key === 'i')) {
  //     event.preventDefault();
  //   }
  // });
}

}
