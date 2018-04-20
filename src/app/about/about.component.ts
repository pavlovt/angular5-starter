import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SelectItem } from "primeng/api";
import { SelectItemGroup } from "primeng/api";

@Component({
  selector: "about",
  styles: [],
  templateUrl: "./about.component.html"
})
export class AboutComponent implements OnInit {
  countries: SelectItem[];
cars: any[];
  public localState: any;
  constructor(public route: ActivatedRoute) {}

  public ngOnInit() {
    this.countries = [
      { label: "AFG", value: "AFG" },
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

    this.cars = [
      { vin: "Page Number"},
      { vin: "Maiden Name"}
     
    ];

    this.route.data.subscribe((data: any) => {
      /**
       * Your resolved data from route.
       */
      this.localState = data.yourData;
    });

    console.log("hello `About` component");
    /**
     * static data that is bundled
     * var mockData = require('assets/mock-data/mock-data.json');
     * console.log('mockData', mockData);
     * if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
     */
    this.asyncDataWithWebpack();
  }
  private asyncDataWithWebpack() {
    /**
     * you can also async load mock data with 'es6-promise-loader'
     * you would do this if you don't want the mock-data bundled
     * remember that 'es6-promise-loader' is a promise
     */
    setTimeout(() => {
      System.import("../../assets/mock-data/mock-data.json").then(json => {
        console.log("async mockData", json);
        this.localState = json;
      });
    });
  }
}


