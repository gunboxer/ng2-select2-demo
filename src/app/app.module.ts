import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RSelect2Module } from 'rselect2';

import { AppComponent } from './app.component';

import { DataService } from '../services/data.service';

import { Ng2Select2HostComponent } from './demos/ng2select2demos/ng2select2host/ng2select2host.component';
import { BasicComponent } from './demos/ng2select2demos/basic/basic.component';
import { TemplateComponent } from './demos/ng2select2demos/template/template.component';
import { DynamicComponent } from './demos/ng2select2demos/dynamic/dynamic.component';
import { OptionsComponent } from './demos/ng2select2demos/options/options.component';
import { ChangeComponent } from './demos/ng2select2demos/change/change.component';
import { MatcherComponent } from './demos/ng2select2demos/matcher/matcher.component';
import { MultipleComponent } from './demos/ng2select2demos/multiple/multiple.component';
import { NoAutoSelectComponent } from './demos/rselect2demos/noautoselect/noautoselect.component';
import { RSelect2HostComponent } from './demos/rselect2demos/rselect2host/rselect2host.component';
import {RDataService} from '../services/rdata.service';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {RSelect2DemoComponent} from './demos/rselect2demo/rselect2demo.component';
import {MarkdownModule} from 'ngx-md';



@NgModule({
  declarations: [
    Ng2Select2HostComponent,
    AppComponent,
    BasicComponent,
    ChangeComponent,
    DynamicComponent,
    OptionsComponent,
    TemplateComponent,
    MatcherComponent,
    MultipleComponent,
    RSelect2DemoComponent,
    RSelect2HostComponent,
    NoAutoSelectComponent
  ],
  imports: [
    BrowserModule,
    RSelect2Module,
    MarkdownModule.forRoot(),
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [ DataService, RDataService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
