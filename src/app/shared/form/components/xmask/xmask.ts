import { Component, OnInit , Input } from '@angular/core';
import * as _ from 'lodash';


@Component({
    selector: "xmask",
    styleUrls: ['./xmask.scss'],
    templateUrl: './xmask.html'
})  
export class XMask implements OnInit {
    @Input() maskType:any = "(999) 999-9999";
    @Input() maskExample = [
        '99-999999'
    ]
    
    ngOnInit() {
       
    }

   
}