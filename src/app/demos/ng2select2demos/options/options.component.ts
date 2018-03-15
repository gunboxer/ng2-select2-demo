import { Component, OnInit } from '@angular/core';
import { S2Option } from 'rselect2';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  public exampleData: Array<S2Option>;
  public options: Select2Options;

  ngOnInit() {
    this.exampleData = [
      {
        id: 'opt1',
        text: 'Options 1'
      } as S2Option,
      {
        id: 'opt2',
        text: 'Options 2'
      } as S2Option,
      {
        id: 'opt3',
        text: 'Options 3'
      } as S2Option,
      {
        id: 'opt4',
        text: 'Options 4'
      } as S2Option
    ];

    this.options = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false
    }
  }
}
