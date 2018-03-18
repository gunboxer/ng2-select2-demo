import {Component, OnInit} from '@angular/core';
import {RDataService} from '../../../../services/rdata.service';
import {SimpleEntity} from '../../../../model/simple.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-noautoselect',
  templateUrl: './noautoselect.component.html',
  styleUrls: ['./noautoselect.component.css']
})
export class NoAutoSelectComponent implements OnInit {
  data: Array<SimpleEntity>;
  entity: SimpleEntity | null;
  options: Select2Options = {minimumResultsForSearch: -1, allowClear: true};

  constructor(private rDataService: RDataService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
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
        queryParamsHandling: 'merge'
      });
  }

}
