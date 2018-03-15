import { Component, OnInit } from '@angular/core';
import { S2Option } from 'rselect2';

@Component({
  selector: 'app-matcher',
  templateUrl: './matcher.component.html',
  styleUrls: ['./matcher.component.css']
})
export class MatcherComponent implements OnInit {
  public options: Select2Options;
  public exampleData: Array<S2Option>;

  ngOnInit() {
    this.options = {
      matcher: (term: string, text: string) => {
        return text.toUpperCase().indexOf(term.toUpperCase()) == 0;
      }
    };

    this.exampleData = [
      {
        id: 'AK',
        text: 'Alaska'
      } as S2Option,
      {
        id: 'HI',
        text: 'Hawaii'
      } as S2Option,
      {
        id: 'CA',
        text: 'California'
      } as S2Option,
      {
        id: 'NV',
        text: 'Nevada'
      } as S2Option,
      {
        id: 'OR',
        text: 'Oregon'
      } as S2Option,
      {
        id: 'WA',
        text: 'Washington'
      } as S2Option,
      {
        id: 'AZ',
        text: 'Arizona'
      } as S2Option,
      {
        id: 'CO',
        text: 'Colorado'
      } as S2Option
    ];
  }
}
