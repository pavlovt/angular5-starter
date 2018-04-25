import { Component, OnInit, Input, ElementRef, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import {SelectItem} from 'primeng/api';
import * as _ from 'lodash';
// declare var $;


@Component({
    selector: 'xmultiselect',
    styleUrls: ['./xmultiselect.scss'],
    templateUrl: './xmultiselect.html',
    encapsulation: ViewEncapsulation.None
})

export class XMultiSelect implements OnInit {
    cities: SelectItem[];
    ctrl: any;
    @Input() name: string;
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() type: string = 'text';
    @Input() id: string;
    @Input() form: any = {};
    @Input() labelClass = '';
    @Input() maxLenght: number = 9999;
    @Input() disabled: boolean = false;

    constructor(
        private el: ElementRef,
        // private change: ChangeDetectorRef,
    ) { 
        this.cities = [
            {label:'New York City', value:{id:1, name: 'New York', code: 'NY'}},
            {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
            {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
            {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
            {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
        ];
    }

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
