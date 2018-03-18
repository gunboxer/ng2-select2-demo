import {Component, OnInit} from '@angular/core';
import {RDataService} from '../../../../services/rdata.service';
import {SimpleEntity} from '../../../../model/simple.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-simpleajaxselect',
  templateUrl: './simpleajaxselect.component.html',
  styleUrls: ['./simpleajaxselect.component.css']
})
export class SimpleAjaxSelectComponent implements OnInit {
  data: Array<SimpleEntity>;
  entity: SimpleEntity | null;
  options: Select2Options = {allowClear: true};

  constructor(private rDataService: RDataService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.rDataService.getSimpleEntityData().delay(1000).subscribe((result: Array<SimpleEntity>) => {
      this.data = result;
      let id = null;
      this.route.queryParams.subscribe(params => {
        id = params['simpleajaxselect'];
        const filterEntity = this.data.filter(entity => entity.id === id);
        this.entity = filterEntity.length ? filterEntity[0] : null;
      });
    });

    this.options.ajax = this.options.ajax = {
      url: 'http://localhost:4200/whateverendpoint',
      dataType: 'json',
      delay: 500,
      headers: {
        'Authorization' : 'Bearer ' + 'whatevertoken',
        'Content-Type' : 'application/json',
      },
      data: function (params) {

        return {
          limit: 20,
          offset: ((params.page || 1) - 1) * 20,
          sortField: 'text',
          sortAscending: true,
          searchField: 'text',
          searchQuery: params.term
        };
      },
      processResults: function (data, params) {
        params.page = params.page || 1;

        return {
          results: data.items,
          pagination: {
            more: (params.page * 20) < data.total
          }
        };
      },
    } as Select2AjaxOptions;
  }

  valueChanged(): void {
    this.router.navigate(['/rselect2'],
      {
        queryParams: {simpleajaxselect: this.entity ? this.entity.id : null},
        queryParamsHandling: 'merge'
      });
  }

}
