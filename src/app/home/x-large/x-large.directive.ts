import {
  Component,
  Directive,
  ElementRef,
  Renderer
} from '@angular/core';

import { AppState } from 'app/app.service';
import {RxApi,Notify,} from 'app/shared'
/**
 * Directive
 * XLarge is a simple directive to show how one is made
 */
@Directive({
  selector: '[x-large]' // using [ ] means selecting attributes
})
export class XLargeDirective {
  constructor(
    public element: ElementRef,
    public renderer: Renderer,
    public ser: AppState,
    public api: RxApi,
  ) {
    /**
     * Simple DOM manipulation to set font size to x-large
     * `nativeElement` is the direct reference to the DOM element
     * element.nativeElement.style.fontSize = 'x-large';
     *
     * for server/webworker support use the renderer
     */
     renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
  }
}
