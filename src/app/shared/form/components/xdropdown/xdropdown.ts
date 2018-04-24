import { Component, OnInit , Input } from '@angular/core';
import { SelectItem } from 'primeng/api';
import * as _ from 'lodash';
@Component({
    selector: "xdropdown",
    styleUrls: ['./xdropdown.scss'],
    templateUrl: './xdropdown.html'
})  
export class XDropdown implements OnInit {
    ctrl: any;
    id: string;
    @Input() options
    @Input() data: SelectItem[];
    @Input() displayFirst:boolean = false;
    @Input() disabled:boolean = false;
    @Input() name: string;
    @Input() form: any = {};
    @Input() placeholder: string = '';
    @Input() label: string = 'adasd';
    
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