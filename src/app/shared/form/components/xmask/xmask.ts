import { Component, OnInit , Input, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';


@Component({
    selector: "xmask",
    styleUrls: ['./xmask.scss'],
    templateUrl: './xmask.html',
    encapsulation: ViewEncapsulation.None
})  
export class XMask implements OnInit {
    ctrl: any;
    @Input() mask;
    @Input() name: string;
    @Input() label: string = '';
    @Input() labelClass = '';
    @Input() id: string;
    @Input() form: any = {};
    
     maskTypes = {
        basic: { maskType:'99-9999'},
        phone: { maskType:'(999) 999-9999'},
        ssn: { maskType:'999-99-9999'},
        phoneExt: { maskType:'(999) 999-9999? x99999'},
        date: { maskType:'99/99/9999'},
        serialNum: { maskType:'a*-999-a999'}
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