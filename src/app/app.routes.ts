import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { ModelsOne } from './example-models/modelsOne/modelsOne';
import { ModelsTwo } from './example-models/modelsTwo/modelsTwo';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'modelsOne',  component: ModelsOne },
  { path: 'modelsTwo', component: ModelsTwo },
  { path: '**',    component: NoContentComponent },
];
