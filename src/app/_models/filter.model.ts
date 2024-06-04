export interface FilterItem {
  id: number;
  name: string;
}

export interface FilterItemUI extends FilterItem {
  selected: boolean;
}

export enum FilterType {
  TYPE = 'TYPE'
}
