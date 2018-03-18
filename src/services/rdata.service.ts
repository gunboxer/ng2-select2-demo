import {Injectable} from '@angular/core';
import {SimpleEntity} from '../model/simple.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RDataService {

  private static simpleData: SimpleEntity[] =
    [{id: '1', first_name: 'Chauncey', last_name: 'Santacrole', gender: 'Male', text: 'Chauncey Santacrole'} as SimpleEntity,
      {id: '2', first_name: 'Obadiah', last_name: 'Jacquemot', gender: 'Male', text: 'Obadiah Jacquemot'} as SimpleEntity,
      {id: '3', first_name: 'Juieta', last_name: 'Luker', gender: 'Female', text: 'Juieta Luker'} as SimpleEntity,
      {id: '4', first_name: 'Theo', last_name: 'Sheffield', gender: 'Female', text: 'Theo Sheffield'} as SimpleEntity,
      {id: '5', first_name: 'Dore', last_name: 'Puckinghorne', gender: 'Male', text: 'Dore Puckinghorne'} as SimpleEntity,
      {id: '6', first_name: 'Ivan', last_name: 'Noakes', gender: 'Male', text: 'Ivan Noakes'} as SimpleEntity,
      {id: '7', first_name: 'Jorge', last_name: 'Cambell', gender: 'Male', text: 'Jorge Cambell'} as SimpleEntity,
      {id: '8', first_name: 'Henry', last_name: 'Jeroch', gender: 'Male', text: 'Henry Jeroch'} as SimpleEntity,
      {id: '9', first_name: 'Husain', last_name: 'Spurier', gender: 'Male', text: 'Husain Spurier'} as SimpleEntity,
      {id: '10', first_name: 'Patsy', last_name: 'Arrault', gender: 'Female', text: 'Patsy Arrault'} as SimpleEntity,
      {id: '11', first_name: 'Julianna', last_name: 'Fawcett', gender: 'Female', text: 'Julianna Fawcett'} as SimpleEntity,
      {id: '12', first_name: 'Martainn', last_name: 'Stileman', gender: 'Male', text: 'Martainn Stileman'} as SimpleEntity,
      {id: '13', first_name: 'Maryjane', last_name: 'Keohane', gender: 'Female', text: 'Maryjane Keohane'} as SimpleEntity,
      {id: '14', first_name: 'Wyatan', last_name: 'Yarr', gender: 'Male', text: 'Wyatan Yarr'} as SimpleEntity,
      {id: '15', first_name: 'Aggi', last_name: 'Kernley', gender: 'Female', text: 'Aggi Kernley'} as SimpleEntity,
      {id: '16', first_name: 'Malena', last_name: 'Collison', gender: 'Female', text: 'Malena Collison'} as SimpleEntity,
      {id: '17', first_name: 'Kennan', last_name: 'Netting', gender: 'Male', text: 'Kennan Netting'} as SimpleEntity,
      {id: '18', first_name: 'Hamil', last_name: 'Helversen', gender: 'Male', text: 'Hamil Helversen'} as SimpleEntity,
      {id: '19', first_name: 'Chelsy', last_name: 'Huygen', gender: 'Female', text: 'Chelsy Huygen'} as SimpleEntity,
      {id: '20', first_name: 'Belva', last_name: 'Briars', gender: 'Female', text: 'Belva Briars'} as SimpleEntity,
      {id: '21', first_name: 'Monika', last_name: 'Rapp', gender: 'Female', text: 'Monika Rapp'} as SimpleEntity,
      {id: '22', first_name: 'Hamid', last_name: 'Comberbeach', gender: 'Male', text: 'Hamid Comberbeach'} as SimpleEntity,
      {id: '23', first_name: 'Jeremiah', last_name: 'Sporle', gender: 'Male', text: 'Jeremiah Sporle'} as SimpleEntity,
      {id: '24', first_name: 'Farlay', last_name: 'Jeffrey', gender: 'Male', text: 'Farlay Jeffrey'} as SimpleEntity,
      {id: '25', first_name: 'Ira', last_name: 'Heineking', gender: 'Female', text: 'Ira Heineking'} as SimpleEntity,
      {id: '26', first_name: 'Carny', last_name: 'Islep', gender: 'Male', text: 'Carny Islep'} as SimpleEntity,
      {id: '27', first_name: 'Damaris', last_name: 'Chidzoy', gender: 'Female', text: 'Damaris Chidzoy'} as SimpleEntity,
      {id: '28', first_name: 'Axel', last_name: 'Cornner', gender: 'Male', text: 'Axel Cornner'} as SimpleEntity,
      {id: '29', first_name: 'Cecile', last_name: 'Brandle', gender: 'Female', text: 'Cecile Brandle'} as SimpleEntity,
      {id: '30', first_name: 'Kincaid', last_name: 'Wawer', gender: 'Male', text: 'Kincaid Wawer'} as SimpleEntity,
      {id: '31', first_name: 'Kerrin', last_name: 'Roan', gender: 'Female', text: 'Kerrin Roan'} as SimpleEntity,
      {id: '32', first_name: 'Worthington', last_name: 'Quarton', gender: 'Male', text: 'Worthington Quarton'} as SimpleEntity,
      {id: '33', first_name: 'Freddy', last_name: 'Holdin', gender: 'Male', text: 'Freddy Holdin'} as SimpleEntity,
      {id: '34', first_name: 'Deirdre', last_name: 'Bambrough', gender: 'Female', text: 'Deirdre Bambrough'} as SimpleEntity,
      {id: '35', first_name: 'Gilberta', last_name: 'Karsh', gender: 'Female', text: 'Gilberta Karsh'} as SimpleEntity,
      {id: '36', first_name: 'Madlen', last_name: 'MacCahee', gender: 'Female', text: 'Madlen MacCahee'} as SimpleEntity,
      {id: '37', first_name: 'Lyle', last_name: 'Antonietti', gender: 'Male', text: 'Lyle Antonietti'} as SimpleEntity,
      {id: '38', first_name: 'Spike', last_name: 'Hryniewicz', gender: 'Male', text: 'Spike Hryniewicz'} as SimpleEntity,
      {id: '39', first_name: 'Nicoline', last_name: 'Brameld', gender: 'Female', text: 'Nicoline Brameld'} as SimpleEntity,
      {id: '40', first_name: 'Joey', last_name: 'Liddel', gender: 'Male', text: 'Joey Liddel'} as SimpleEntity,
      {id: '41', first_name: 'Clayton', last_name: 'Marzella', gender: 'Male', text: 'Clayton Marzella'} as SimpleEntity,
      {id: '42', first_name: 'Emyle', last_name: 'Bickford', gender: 'Female', text: 'Emyle Bickford'} as SimpleEntity,
      {id: '43', first_name: 'Zilvia', last_name: 'Cawkwell', gender: 'Female', text: 'Zilvia Cawkwell'} as SimpleEntity,
      {id: '44', first_name: 'Boote', last_name: 'Coney', gender: 'Male', text: 'Boote Coney'} as SimpleEntity,
      {id: '45', first_name: 'Blanche', last_name: 'Corcoran', gender: 'Female', text: 'Blanche Corcoran'} as SimpleEntity,
      {id: '46', first_name: 'Bobby', last_name: 'Lautie', gender: 'Male', text: 'Bobby Lautie'} as SimpleEntity,
      {id: '47', first_name: 'Onfre', last_name: 'Mc Combe', gender: 'Male', text: 'Onfre Mc Combe'} as SimpleEntity,
      {id: '48', first_name: 'Bruno', last_name: 'Bruster', gender: 'Male', text: 'Bruno Bruster'} as SimpleEntity,
      {id: '49', first_name: 'Etheline', last_name: 'Kenlin', gender: 'Female', text: 'Etheline Kenlin'} as SimpleEntity,
      {id: '50', first_name: 'Darby', last_name: 'Parke', gender: 'Male', text: 'Darby Parke'} as SimpleEntity,
      {id: '51', first_name: 'Martie', last_name: 'Bundy', gender: 'Male', text: 'Martie Bundy'} as SimpleEntity,
      {id: '52', first_name: 'Graehme', last_name: 'Gurley', gender: 'Male', text: 'Graehme Gurley'} as SimpleEntity,
      {id: '53', first_name: 'Nikolai', last_name: 'Haworth', gender: 'Male', text: 'Nikolai Haworth'} as SimpleEntity,
      {id: '54', first_name: 'Shandeigh', last_name: 'Lindhe', gender: 'Female', text: 'Shandeigh Lindhe'} as SimpleEntity,
      {id: '55', first_name: 'Flin', last_name: 'Viollet', gender: 'Male', text: 'Flin Viollet'} as SimpleEntity,
      {id: '56', first_name: 'Xenos', last_name: 'Malkin', gender: 'Male', text: 'Xenos Malkin'} as SimpleEntity,
      {id: '57', first_name: 'Mel', last_name: 'Aylward', gender: 'Female', text: 'Mel Aylward'} as SimpleEntity,
      {id: '58', first_name: 'Valentin', last_name: 'Harnwell', gender: 'Male', text: 'Valentin Harnwell'} as SimpleEntity,
      {id: '59', first_name: 'Robin', last_name: 'Reinhard', gender: 'Male', text: 'Robin Reinhard'} as SimpleEntity,
      {id: '60', first_name: 'Barnett', last_name: 'Pilipyak', gender: 'Male', text: 'Barnett Pilipyak'} as SimpleEntity,
      {id: '61', first_name: 'Clywd', last_name: 'Ors', gender: 'Male', text: 'Clywd Ors'} as SimpleEntity,
      {id: '62', first_name: 'Cristobal', last_name: 'Goodier', gender: 'Male', text: 'Cristobal Goodier'} as SimpleEntity,
      {id: '63', first_name: 'Haze', last_name: 'Huygens', gender: 'Male', text: 'Haze Huygens'} as SimpleEntity,
      {id: '64', first_name: 'Trudie', last_name: 'Conquest', gender: 'Female', text: 'Trudie Conquest'} as SimpleEntity,
      {id: '65', first_name: 'Morey', last_name: 'Peirone', gender: 'Male', text: 'Morey Peirone'} as SimpleEntity,
      {id: '66', first_name: 'Arlette', last_name: 'Mowle', gender: 'Female', text: 'Arlette Mowle'} as SimpleEntity,
      {id: '67', first_name: 'Virginie', last_name: 'Gerault', gender: 'Female', text: 'Virginie Gerault'} as SimpleEntity,
      {id: '68', first_name: 'Claudina', last_name: 'Fanstone', gender: 'Female', text: 'Claudina Fanstone'} as SimpleEntity,
      {id: '69', first_name: 'Maurise', last_name: 'Hurring', gender: 'Male', text: 'Maurise Hurring'} as SimpleEntity,
      {id: '70', first_name: 'Tybie', last_name: 'Arnoult', gender: 'Female', text: 'Tybie Arnoult'} as SimpleEntity,
      {id: '71', first_name: 'Richie', last_name: 'Merrilees', gender: 'Male', text: 'Richie Merrilees'} as SimpleEntity,
      {id: '72', first_name: 'Marnie', last_name: 'Durn', gender: 'Female', text: 'Marnie Durn'} as SimpleEntity,
      {id: '73', first_name: 'Lisabeth', last_name: 'Bernot', gender: 'Female', text: 'Lisabeth Bernot'} as SimpleEntity,
      {id: '74', first_name: 'Reggie', last_name: 'Filippello', gender: 'Female', text: 'Reggie Filippello'} as SimpleEntity,
      {id: '75', first_name: 'Ximenes', last_name: 'Henrichsen', gender: 'Male', text: 'Ximenes Henrichsen'} as SimpleEntity,
      {id: '76', first_name: 'Farlay', last_name: 'Wackly', gender: 'Male', text: 'Farlay Wackly'} as SimpleEntity,
      {id: '77', first_name: 'Sella', last_name: 'Sturt', gender: 'Female', text: 'Sella Sturt'} as SimpleEntity,
      {id: '78', first_name: 'Mendy', last_name: 'Sipson', gender: 'Male', text: 'Mendy Sipson'} as SimpleEntity,
      {id: '79', first_name: 'Emlynne', last_name: 'McGeachey', gender: 'Female', text: 'Emlynne McGeachey'} as SimpleEntity,
      {id: '80', first_name: 'Livvy', last_name: 'Marquis', gender: 'Female', text: 'Livvy Marquis'} as SimpleEntity,
      {id: '81', first_name: 'Luke', last_name: 'Aspole', gender: 'Male', text: 'Luke Aspole'} as SimpleEntity,
      {id: '82', first_name: 'Syd', last_name: 'Gwilliams', gender: 'Male', text: 'Syd Gwilliams'} as SimpleEntity,
      {id: '83', first_name: 'Kinny', last_name: 'Hurton', gender: 'Male', text: 'Kinny Hurton'} as SimpleEntity,
      {id: '84', first_name: 'Fredia', last_name: 'Gibbings', gender: 'Female', text: 'Fredia Gibbings'} as SimpleEntity,
      {id: '85', first_name: 'Harp', last_name: 'Bassil', gender: 'Male', text: 'Harp Bassil'} as SimpleEntity,
      {id: '86', first_name: 'Sharity', last_name: 'Margery', gender: 'Female', text: 'Sharity Margery'} as SimpleEntity,
      {id: '87', first_name: 'Cameron', last_name: 'Askie', gender: 'Male', text: 'Cameron Askie'} as SimpleEntity,
      {id: '88', first_name: 'Archer', last_name: 'Chritchlow', gender: 'Male', text: 'Archer Chritchlow'} as SimpleEntity,
      {id: '89', first_name: 'Brenna', last_name: 'Ruffey', gender: 'Female', text: 'Brenna Ruffey'} as SimpleEntity,
      {id: '90', first_name: 'Nilson', last_name: 'Turle', gender: 'Male', text: 'Nilson Turle'} as SimpleEntity,
      {id: '91', first_name: 'Kelly', last_name: 'Howship', gender: 'Female', text: 'Kelly Howship'} as SimpleEntity,
      {id: '92', first_name: 'Fina', last_name: 'Dawidman', gender: 'Female', text: 'Fina Dawidman'} as SimpleEntity,
      {id: '93', first_name: 'Roze', last_name: 'Lambertson', gender: 'Female', text: 'Roze Lambertson'} as SimpleEntity,
      {id: '94', first_name: 'Gregoire', last_name: 'Leverson', gender: 'Male', text: 'Gregoire Leverson'} as SimpleEntity,
      {id: '95', first_name: 'Mariya', last_name: 'Sheed', gender: 'Female', text: 'Mariya Sheed'} as SimpleEntity,
      {id: '96', first_name: 'Tasha', last_name: 'Deniset', gender: 'Female', text: 'Tasha Deniset'} as SimpleEntity,
      {id: '97', first_name: 'Chane', last_name: 'Kristoffersson', gender: 'Male', text: 'Chane Kristoffersson'} as SimpleEntity,
      {id: '98', first_name: 'Shalne', last_name: 'Thornally', gender: 'Female', text: 'Shalne Thornally'} as SimpleEntity,
      {id: '99', first_name: 'Osborn', last_name: 'Emanuele', gender: 'Male', text: 'Osborn Emanuele'} as SimpleEntity,
      {id: '100', first_name: 'Hollie', last_name: 'Lorence', gender: 'Female', text: 'Hollie Lorence'}] as SimpleEntity[];

  private static complareTo(entity1, entity2): number {
    if (entity1 > entity2) {
      return 1;
    } else if (entity1 === entity2) {
      return 0;
    }
    return -1;
  }

  constructor() {
    const context = this;
    $.ajax = (params) => {
      return {
        then: function (success) {
          const data = context.getSimpleEntityDataPage(params as QueryParams);
          setTimeout(() => { success(data, null, null); }, 5000);
        }
      } as JQueryXHR;
    };
  }

  getSimpleEntityData(): Observable<Array<SimpleEntity>> {
    return Observable.create((obs) => {
      obs.next(RDataService.simpleData);
      obs.complete();
    });
  }

  getSimpleEntityDataPage(queryParams: QueryParams): { items: SimpleEntity[], total: number } {
    let data = (queryParams.searchQuery && queryParams.searchField) ?
      RDataService.simpleData.filter(entity =>
        entity[queryParams.searchField].toString().toLowerCase().contains(queryParams.searchQuery.toLowerCase())) :
      RDataService.simpleData;

    data = queryParams.sortField ?
      data.sort((entity1, entity2) => queryParams.sortAscending ?
        RDataService.complareTo(entity1[queryParams.sortField], entity2[queryParams.sortField]) :
        RDataService.complareTo(entity1[queryParams.sortField], entity2[queryParams.sortField])
      ) : data;

    return {
      items: ((queryParams.offset || queryParams.offset === 0) && queryParams.limit) ?
        data.slice(queryParams.offset, (queryParams.offset + queryParams.limit)) :
        data,
      total: data.length
    };
  }

}

class QueryParams {
  limit: number;
  offset: number;
  sortField: string;
  sortAscending: boolean;
  searchField: string;
  searchQuery: string;
}
