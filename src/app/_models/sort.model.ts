import { SortDirection } from "../_consts/sort.const";

export interface SortItem {
  label: string;
  value: string;
  direction?: SortDirection;
}
