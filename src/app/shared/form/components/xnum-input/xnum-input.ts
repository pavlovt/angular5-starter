import { Component, ViewEncapsulation, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'xnum-input',
  templateUrl: './xnum-input.html',
  styleUrls: ['./xnum-input.scss'],
  encapsulation: ViewEncapsulation.None
})
export class XNumInput {
  ctrl: any;
  @Input() name: string;
  @Input() id: string;
  @Input() form: any = {};
  @Input() min:number;
  @Input() max:number;
  @Input() step:number;

  ngOnInit() {
    this.id = this.id || "form-" + this.name;
  }

  ngOnChanges(changes) {
    this.ctrl = (this.form && this.form.formGroup.controls[this.name]) || {};
    // console.log(changes, this.ctrl);
    if (_.get(changes, "disabled.currentValue") === true) {
      this.ctrl.disable && this.ctrl.disable();
    } else {
      this.ctrl.enable && this.ctrl.enable();
    }
  }
}
