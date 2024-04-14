import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[font-size-change]'
})
export class FontSizeChangeDirective implements OnInit {
  
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.fontSize = '20px';
  }
}
