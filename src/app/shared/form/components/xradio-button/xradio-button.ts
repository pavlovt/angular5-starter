import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';


@Component({
selector: 'xradio-button',
templateUrl: './xradio-button.html',
styleUrls: ['./xradio-button.scss'],
encapsulation: ViewEncapsulation.None
})
export class XRadioButton {
    ctrl: any;
    @Input() id: string;
    @Input() name?: string;
    @Input() label?: string = '';
    @Input() form: any = {};
    @Input() isDisabled:boolean;

    ngOnInit() {
        this.id = this.id || 'form-' + this.name;
    }

  
    ngOnChanges(changes) {
        this.ctrl = this.form && this.form.formGroup.controls[this.name] || {};
        // console.log(changes, this.ctrl);
        if (_.get(changes, 'disabled.currentValue') === true) {
            this.ctrl.disable && this.ctrl.disable();
        } else {
            this.ctrl.enable && this.ctrl.enable();
        }
    }
}