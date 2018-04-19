import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'zzz',
  template: `
    <span>zzz</span>
    <html-outlet [html]="tpl"></html-outlet>
  `
})
export class ZzzComponent implements OnInit {
  tpl: any
  constructor( private el: ElementRef) {
    // <p-button label="zzz"></p-button>
    // <tst></tst>
    this.tpl = '<a routerLink="/about">about</a>';
  }
  ngOnInit() {
    console.log(this.el.nativeElement)
    console.log('attributes', this.el.nativeElement.attributes)
    const z = this.el.nativeElement.querySelector('span')
    z.setAttribute('attr.qq', 'qqq')
    // this.tpl = '<p-button label="zzz"></p-button>';
    // this.el.nativeElement.querySelector('p-button').setAttribute('label', 'qqq')
  }
}
