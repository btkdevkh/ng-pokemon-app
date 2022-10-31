import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {
  pokemonsList: Pokemon[];

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe(pokemonList => this.pokemonsList = pokemonList)
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemons', pokemon.id])
  }
}
