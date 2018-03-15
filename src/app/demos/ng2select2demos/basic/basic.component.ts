import { Component, OnInit } from '@angular/core';
import { S2Option } from 'rselect2';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  public exampleData: Array<S2Option>;

  ngOnInit() {
    this.exampleData = [
      {
        id: 'basic1',
        text: 'Basic 1'
      } as S2Option,
      {
        id: 'basic2',
        disabled: true,
        text: 'Basic 2'
      } as S2Option,
      {
        id: 'basic3',
        text: 'Basic 3'
      } as S2Option,
      {
        id: 'basic4',
        text: 'Basic 4'
      } as S2Option
    ];
  }
}
