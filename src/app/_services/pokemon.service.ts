import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../app.config';
import { Response, Pokemon, PokemonSearchParams, PokemonType } from '../_models';
import queryString from '../_utils/query-string';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAll(searchRequest: PokemonSearchParams) {
    const params = queryString.stringify({...searchRequest});
    return this.http.get<Response<Pokemon[]>>(`${API_URL}/pokemons?${params}`);
  }

  get(id: number) {
    return this.http.get<Response<Pokemon>>(`${API_URL}/pokemons/${id}`);
  }

  getTypes() {
    return this.http.get<Response<PokemonType[]>>(`${API_URL}/types`);
  }

  getSprite(id: string) {
    return this.http.get(`${API_URL}/pokemons/${id}/sprite`);
  }
}
