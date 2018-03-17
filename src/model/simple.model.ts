import {S2Option} from 'rselect2';

export class SimpleEntity implements S2Option {

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
