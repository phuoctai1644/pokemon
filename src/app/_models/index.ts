export * from './pokemon.model';

export interface List2Res<T> {
  data: T[];
  status: number;
  success: boolean;
}

export interface Pageable {
  'page[number]'?: number;
  'page[size]'?: number;
  'sort'?: number;
}
