import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { PokemonService } from './_services/pokemon.service';
import { Pokemon, PokemonSearchParams, PokemonType } from './_models';
import { PokemonCardComponent } from './_components/pokemon-card/pokemon-card.component';
import { PokemonTypesPipe } from './_pipes/pokemon-types.pipe';
import { FilterComponent } from './_components/filter/filter.component';
import { FilterItem, FilterItemUI, FilterType } from './_models/filter.model';
import { SortComponent } from './_components/sort/sort.component';
import { SortItem } from './_models/sort.model';
import { SortDirection } from './_consts/sort.const';

const COMPONENTS = [PokemonCardComponent, FilterComponent, SortComponent];
const PIPES = [PokemonTypesPipe];
const DIRECTIVES = [NgFor]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  pokemonList: Pokemon[] = [];
  types: PokemonType[] = [];
  searchParams: PokemonSearchParams = {
    "page[number]": 1,
    "page[size]": 10,
  }
  filters: FilterItem[] = [];
  filterType = FilterType;
  destroyed$ = new Subject<any>();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemon();
    this.getAllTypes();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
    this.destroyed$.complete();
  }

  getAllPokemon() {
    this.pokemonService.getAll(this.searchParams)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: response => {
          this.pokemonList = response.data;
        },
        error: () => {
          console.log('Having an error!');
        }
      });
  }

  getAllTypes() {
    this.pokemonService.getTypes()
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: response => {
          this.types = response.data;
        },
        error: () => {
          console.log('Having an error!');
        }
      })
  }

  onFilterChanged(filters: FilterItemUI[], filterType: FilterType) {
    if (filterType === FilterType.TYPE) {
      this.searchParams['filter[type]'] = filters.map(el => el.id);
    }
    this.getAllPokemon();
  }

  onSortChanged(sort: SortItem) {
    let sortParam = sort.value;
    if (sort.direction === SortDirection.DESC) {  
      sortParam = `-${sortParam}`;
    }

    this.searchParams.sort = sortParam;
    this.getAllPokemon();
  }
}
