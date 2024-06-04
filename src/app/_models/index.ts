export * from './pokemon.model';
export * from './progress.model';

export interface Response<T> {
  data: T;
  status: number;
  success: boolean;
}
