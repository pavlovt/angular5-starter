import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import {RadioButtonModule} from '../shared/prime'
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {MessageModule} from 'primeng/message';
import {CardModule} from 'primeng/card';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    Title
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './home.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    value: Date;
  /**
   * Set our default values
   */
  public localState = { value: '' };
  public sampleTableData = [{
    id: 1,
    name: 'Valeri',
    age: 27
  }, {
    id: 2,
    name: 'Maria',
    age: 23
  }, {
    id: 3,
    name: 'Stefan',
    age: 43
  }];

  public sampleTableCols = [{
    label: 'Name',
    field: 'name'
  }, {
    label: 'Age',
    field: 'age'
  }];
  public ngPrimeTableConfig = {
    paginator: true
  };
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
    public title: Title
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
