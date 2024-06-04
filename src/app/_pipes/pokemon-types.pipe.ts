import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon, PokemonType } from '../_models';

@Pipe({
  name: 'pokemonTypes',
  standalone: true
})
export class PokemonTypesPipe implements PipeTransform {

  transform(pokemon: Pokemon, types: PokemonType[]): PokemonType[] {
    if (!types) {
      return [];
    }
    return types.filter(type => (type.id === pokemon?.type_1 || type.id === pokemon?.type_2));
  }
}
