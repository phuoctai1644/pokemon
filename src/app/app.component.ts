import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { PokemonService } from './_services/pokemon.service';
import { Pokemon, PokemonSearchParams, PokemonType } from './_models';
import { PokemonCardComponent } from './_components/pokemon-card/pokemon-card.component';
import { PokemonTypesPipe } from './_pipes/pokemon-types.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonCardComponent, NgFor, PokemonTypesPipe],
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
          console.log(this.pokemonList)
          // this.getSprite();
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
}
