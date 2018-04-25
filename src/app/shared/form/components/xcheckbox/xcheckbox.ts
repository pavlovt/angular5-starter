import { Component, OnInit, Input, Output, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';


@Component({
    selector: 'xcheckbox',
    styleUrls: ['./xcheckbox.scss'],
    templateUrl: './xcheckbox.html',
    encapsulation: ViewEncapsulation.None
})
export class XCheckbox implements OnInit {
    @Input() name: string;
    @Input() label: string = '';
    @Input() id: string = 'form-checkbox-' + this.name;
    @Input() color?: string = '#333';
    @Input() disabled?: boolean;
    @Input() value?: boolean;
    @Input() form?: any;
    ctrl: any = {};

    constructor(

    ) { }

    ngOnInit() {
        this.id = this.id || 'form-' + this.name;
        if (this.form) this.value = this.form.formGroup.value[this.name];
    }

    ngOnChanges(changes) {
        this.ctrl = this.form && this.form.formGroup.controls[this.name] || {};
        // console.log(changes, this.ctrl);
        if (_.get(changes, 'isDisabled.currentValue') === true) {
            this.ctrl.disable && this.ctrl.disable();
        } else {
            this.ctrl.enable && this.ctrl.enable();
        }
    }

}
