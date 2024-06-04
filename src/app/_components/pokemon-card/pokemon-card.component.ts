import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonType } from '../../_models';
import { ProgressComponent } from '../progress/progress.component';
import { PokemonStatisticPipe } from '../../_pipes/pokemon-statistic.pipe';
import { PokemonMaxStatistic } from '../../_consts';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [ProgressComponent, PokemonStatisticPipe],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  @Input() types!: PokemonType[];

  pokemonMaxStatistic = PokemonMaxStatistic;

  ngOnInit() {
    console.log(this.pokemon);
  }
}
