import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'xdate',
    styleUrls: ['./xdate.scss'],
    templateUrl: './xdate.html',
    encapsulation: ViewEncapsulation.None
})
export class XDate {
    value: Date;
    @Input() name: string;
    @Input() label: string = '';
    @Input() placeholder: string = '';
    @Input() type: string = 'text';
    @Input() id: string = 'form-' + this.name;
    @Input() form: any = {};
    @Input() labelClass = '';

    constructor(
    ) { }

}
