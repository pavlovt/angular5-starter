import {
  Component,
  Directive,
  OnInit,
  Input,
  ElementRef
} from '@angular/core';

interface ITableCols {
  label: string;
  field: string;
}

@Component({
  selector: 'xtable',
  template: `
  <p-table [columns]="cols" [value]="data" [rowTrackBy]="trackBy">
    <ng-template pTemplate="header" let-columns>
        <tr>
        <th *ngFor="let col of columns">
            {{col.label}}
        </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-data let-columns="columns">
        <tr>
          <td *ngFor="let col of columns">
            {{data[col.field]}}
          </td>
        </tr>
    </ng-template>
  </p-table>
  `
})
export class XTableComponent implements OnInit {
  @Input() cols: Array<ITableCols> = [];
  @Input() data: Array<any> = [];

  constructor() { }

  public ngOnInit() { }

  public trackBy(index: number, row: any) {
    return row.id;
  }
}
