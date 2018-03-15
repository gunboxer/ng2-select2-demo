import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { S2Option } from 'rselect2';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {
  public exampleData: Array<S2Option>;
  public startValue: string;
  public selected: string;

  constructor(private service: DataService) {}

  ngOnInit() {
    this.exampleData = this.service.getChangeList();
    this.startValue = 'car3';
    this.selected = '';
  }

  public changeValue() {
    this.startValue = 'car2';
  }

  public changeData() {
    this.exampleData = this.service.getChangeListAlternative();
  }

  public changed(e: any): void {
    this.selected = e.value;
  }
}
