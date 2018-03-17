import {Injectable} from '@angular/core';
import {SimpleEntity} from '../model/simple.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RDataService {

  constructor() {
  }

  getSimpleEntityData(): Observable<Array<SimpleEntity>> {
    return Observable.create((obs) => {
      obs.next([
        {
          id: 'id1',
          text: 'Year'
        },
        {
          id: 'id2',
          text: 'Month'
        },
        {
          id: 'id3',
          text: 'Week'
        },
        {
          id: 'id4',
          text: 'Day'
        }
      ]);
      obs.complete();
    });
  }

}
