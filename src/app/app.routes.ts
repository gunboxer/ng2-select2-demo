import {Routes} from '@angular/router';
import {RSelect2DemoComponent} from './demos/rselect2demo/rselect2demo.component';

export const ROUTES: Routes = [
  { path: 'rselect2', component: RSelect2DemoComponent },
  { path: '**', redirectTo: 'rselect2', pathMatch: 'full' }
];
