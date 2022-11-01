import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styles: [
  ]
})
export class PokemonSearchComponent implements OnInit {
  searchTerms = new Subject<string>()
  pokemons$: Observable<Pokemon[]>

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.pokemonService.searchPokemonListByTerm(term))
    )
  }

  search(term: string) {
    this.searchTerms.next(term)
  }

  goToDetails(pokemon: Pokemon) {
    this.router.navigate(['/pokemons', pokemon.id])
  }

}
