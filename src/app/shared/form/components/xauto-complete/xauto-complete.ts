import { Component, ViewEncapsulation, Output, Input } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "xauto-complete",
  templateUrl: "./xauto-complete.html",
  styleUrls: ["./xauto-complete.scss"],
  encapsulation: ViewEncapsulation.None
})
export class XAutoComplete {
  ctrl: any;
  @Input() id: string;
  @Input() name: string;
  @Input() label: string = "";
  @Input() type: string = "text";
  @Input() placeholder;
  @Input() data: any[];
  @Input() filteredData: any[];
  @Input() form: any = {};
  @Input() labelClass: string = "";
  @Input() showDropdown: boolean = false;

  ngOnInit() {
    this.id = this.id || "form-" + this.name;
  }

  ngOnChanges(changes) {
    this.ctrl = (this.form && this.form.formGroup.controls[this.name]) || {};
    // console.log(changes, this.ctrl);
    if (_.get(changes, "disabled.currentValue") === true) {
      this.ctrl.disable && this.ctrl.disable();
    } else {
      this.ctrl.enable && this.ctrl.enable();
    }
  }

  filterData(event) {
    console.log(this.data);
    this.filteredData = [];
    for (let i = 0; i < this.data.length; i++) {
      let data = this.data[i];
      if (data.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredData.push(data);
      }
    }
  }
}
