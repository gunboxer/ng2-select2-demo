import {Component, OnInit} from '@angular/core';
import {RDataService} from '../../../../services/rdata.service';
import {SimpleEntity} from '../../../../model/simple.model';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-simpleajaxselect',
  templateUrl: './simpleajaxselect.component.html',
  styleUrls: ['./simpleajaxselect.component.css']
})
export class SimpleAjaxSelectComponent implements OnInit {
  data: Array<SimpleEntity>;
  entity: SimpleEntity | null;
  options: Select2Options = {minimumResultsForSearch: -1, allowClear: true};

  constructor(private rDataService: RDataService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {

/*
    const ajaxFunction = (settings: JQueryAjaxSettings, success?: (data: any) => null, failure?: () => null): JQueryXHR => {

    } as AjaxFunction;

    const select2AjaxOptions = {
      transport:
    } as Select2AjaxOptions;

    this.options.ajax = select2AjaxOptions;
*/

    this.rDataService.getSimpleEntityData().delay(1000).subscribe((result: Array<SimpleEntity>) => {
      this.data = result;
      let id = null;
      this.route.queryParams.subscribe(params => {
        id = params['noautoselect'];
        const filterEntity = this.data.filter(entity => entity.id === id);
        this.entity = filterEntity.length ? filterEntity[0] : null;
      });
    });
  }

  valueChanged(): void {
    this.router.navigate(['/rselect2'],
      {
        queryParams: {noautoselect: this.entity ? this.entity.id : null},
        preserveFragment: true
      });
  }

}
