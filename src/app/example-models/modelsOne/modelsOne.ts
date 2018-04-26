import { Component, OnInit } from '@angular/core';
import { ValidationManager } from 'app/shared/form/services/validation-manager';

@Component({
  selector: 'models-one',
  styleUrls: ['./modelsOne.scss'],
  templateUrl: './modelsOne.html'
})

export class ModelsOne implements OnInit {

  form;
  data: any[] = ['Audi','BMW','Fiat','Ford','Honda','Jaguar','Mercedes','Renault','Volvo','VW'];
  arr = [
    { label: "AFG", value: "AFG"},
    { label: "ALB", value: "ALB" },
    { label: "AND", value: "AND" },
    { label: "AGO", value: "AGO" },
    { label: "AIA", value: "AIA" },
    { label: "ATA", value: "ATA" },
    { label: "BHS", value: "BGS" },
    { label: "BHR", value: "BHR" },
    { label: "BGD", value: "BGD" },
    { label: "BOL", value: "BOL" },
    { label: "ATA", value: "ATA" },
    { label: "BHS", value: "BGS" },
    { label: "BHR", value: "BHR" },
    { label: "BGD", value: "BGD" },
    { label: "BOL", value: "BOL" }
  ];

  ngOnInit() {
    this.form = new ValidationManager({
      'email': 'required|email',
      'name': 'required',
      'text': 'required',
      'checkbox': 'required',
      'date': 'required',
      'select': 'required',
      'password': 'required|rangeLength:6,30',
      'mask': 'required|rangeLength:2,15',
      'auto': 'required',
      'dropdown': 'required',
      'xradio': 'required',
      'xnumInput': 'required'
    });

  }
}