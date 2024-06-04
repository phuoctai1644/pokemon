import { Pipe, PipeTransform } from '@angular/core';
import { ProgressGroupItem } from '../_models';
import { PROGRESS_EXIST, PROGRESS_MISSING, PokemonMaxStatistic } from '../_consts';

@Pipe({
  name: 'pokemonStatistic',
  standalone: true
})
export class PokemonStatisticPipe implements PipeTransform {
  transform(stat: any, maxStat: PokemonMaxStatistic): ProgressGroupItem[] {
    const current = { label: '', count: (stat / maxStat) * 100, color: PROGRESS_EXIST }
    const missing = { label: '', count: 100 - current.count, color: PROGRESS_MISSING }
    return [ current, missing ];
  }
}
