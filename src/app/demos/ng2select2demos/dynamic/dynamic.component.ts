import { Component, OnInit } from '@angular/core';
import { S2Option } from 'rselect2';
import { DataService } from '../../../../services/data.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  public exampleData: Observable<Array<S2Option>>;
  public startValue: Observable<string>;

  constructor(private service: DataService) {}

  ngOnInit() {
    this.exampleData = this.service.getDynamicList().delay(4000);
    this.startValue = Observable.create(obs => {
      obs.next('dyn3');
      obs.complete();
    }).delay(6000);
  }
}
