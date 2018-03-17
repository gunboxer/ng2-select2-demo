import {S2Option} from 'rselect2';

export class ImageEntity implements S2Option {

  image: string;
  winner: string;

  children: Array<S2Option>;
  disabled: boolean;
  element: HTMLOptionElement;
  fixed: boolean;
  id: string;
  loading: boolean;
  selected: boolean;
  text: string;
  title: string;

}
