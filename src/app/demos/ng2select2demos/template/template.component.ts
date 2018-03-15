import { Component, OnInit } from '@angular/core';
import { Select2TemplateFunction, S2Option } from 'rselect2';
import { DataService } from '../../../../services/data.service';
import {ImageEntity} from '../../../../services/data.model';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  public exampleData: Array<S2Option>;
  public options: Select2Options;

  constructor(private service: DataService) {}

  ngOnInit() {
    this.exampleData = this.service.getTemplateList();
    this.options = {
      templateResult: this.templateResult,
      templateSelection: this.templateSelection
    } as Select2Options;
  }

  // function for result template
  public templateResult: Select2TemplateFunction = (state: ImageEntity): JQuery | string => {
    if (!state.id) {
      return state.text;
    }

    let image = '<span class="image"></span>';

    if (state.image) {
      image = '<span class="image"><img src="' + state.image + '"</span>';
    }

    return jQuery('<span><b>' + state.winner + '.</b> ' + image + ' ' + state.text + '</span>');
  }

  // function for selection template
  public templateSelection: Select2TemplateFunction = (state: ImageEntity): JQuery | string => {
    if (!state.id) {
      return state.text;
    }

    return jQuery('<span><b>' + state.winner + '.</b> ' + state.text + '</span>');
  }

}
