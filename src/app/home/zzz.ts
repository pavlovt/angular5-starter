import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'zzz',
  template: `
    <span>zzz</span>
  `
})
export class ZzzComponent implements OnInit {
  constructor( private el: ElementRef) {}
  ngOnInit() {
    console.log(this.el.nativeElement)
    console.log('attributes', this.el.nativeElement.attributes)
    const z = this.el.nativeElement.querySelector('span')
    z.setAttribute('attr.qq', 'qqq')
  }
}
