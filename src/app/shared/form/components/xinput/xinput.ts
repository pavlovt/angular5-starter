import { Component, OnInit, Input, ElementRef, ChangeDetectorRef } from '@angular/core';
import _ from 'lodash';
declare var $;

@Component({
    selector: 'xinput',
    styleUrls: ['./xinput.scss'],
    templateUrl: './xinput.html'
})
export class XInput implements OnInit {
    
    @Input() name: string;
    @Input() label: string = '';
    @Input() tooltip?: string = '';
    @Input() placeholder: string = '';
    @Input() type: string = 'text';
    @Input() id: string;
    @Input() form: any = {};
    @Input() labelClass = '';
    @Input() maxLenght: number = 9999;
    @Input() isDisabled: boolean = false;
    
    constructor() {}

    ngOnInit() {
             
    }
}
