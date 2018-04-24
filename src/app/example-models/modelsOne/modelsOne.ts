import { Component, OnInit } from '@angular/core';
import { ValidationManager } from './../../shared/form/services/validation-manager';

@Component({
    selector: 'models-one',
    styleUrls: ['./modelsOne.scss'],
    templateUrl: './modelsOne.html'
})

export class ModelsOne implements OnInit {

    form;

    ngOnInit() {
        this.form = new ValidationManager({
            'email': 'required|email',
            'username': 'required|username'
        });

    }
}