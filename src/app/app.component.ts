import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  pokemonsList: Pokemon[] = POKEMONS;
  selectedPokemon: Pokemon|undefined

  selectPokemon(pokemonId: string) {
    const pokemon = this.pokemonsList.find(p => p.id == +pokemonId)
    console.log(`Vous avez demandé ${pokemon?.name}`);
    this.selectedPokemon = pokemon
  }

  ngOnInit() {
    console.table(this.pokemonsList);
  }
}

// to be continue from: 2h:26m
