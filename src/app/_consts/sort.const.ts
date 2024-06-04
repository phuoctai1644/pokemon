import { SortItem } from "../_models/sort.model";

export const SortItems: SortItem[] = [
  {
    label: 'Name',
    value: 'number'
  },
  {
    label: 'Total',
    value: 'total'
  },
  {
    label: 'HP',
    value: 'hp'
  },
  {
    label: 'Attack',
    value: 'attack'
  },
  {
    label: 'Defense',
    value: 'defense'
  },
  {
    label: 'Sp_atk',
    value: 'sp_atk'
  }
];

export enum SortDirection {
  DESC = 'desc',
  ASC = 'asc'
}
