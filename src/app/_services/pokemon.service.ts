import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../app.config';
import { List2Res, Pokemon, PokemonSearchParams, PokemonType } from '../_models';
import * as queryString from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAll(searchRequest: PokemonSearchParams) {
    const params = queryString.stringify({...searchRequest});
    return this.http.get<List2Res<Pokemon>>(`${API_URL}/pokemons?${params}`);
  }

  get(id: number) {
    return this.http.get<Pokemon>(`${API_URL}/pokemons/${id}`);
  }

  getTypes() {
    return this.http.get<PokemonType[]>(`${API_URL}/types`);
  }

  getSprite(id: number) {
    return this.http.get(`${API_URL}/pokemons/${id}/sprite`);
  }
}
