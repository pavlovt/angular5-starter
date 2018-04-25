import { Component, OnInit , Input, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/api';
import * as _ from 'lodash';
@Component({
    selector: "xdropdown",
    styleUrls: ['./xdropdown.scss'],
    templateUrl: './xdropdown.html',
    encapsulation: ViewEncapsulation.None
})  
export class XDropdown implements OnInit {
    ctrl: any;
    id: string = 'asdsad';
    @Input() name: string;
    @Input() label?: string = '';
    @Input() placeholder: string = '';
    @Input() displayFirst:boolean = false;
    @Input() options
    @Input() data: SelectItem[];
    @Input() form: any = {};
    @Input() disabled:boolean = false;
    @Input() labelClass = '';
    
    ngOnInit() {
        this.ctrl = this.form && this.form.formGroup.controls[this.name] || {};
        this.id = 'form-select-' + this.name;
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