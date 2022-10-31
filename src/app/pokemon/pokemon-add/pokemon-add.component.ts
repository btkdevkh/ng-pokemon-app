import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-add',
  templateUrl: './pokemon-add.component.html',
  styles: [
  ]
})
export class PokemonAddComponent implements OnInit {
  pokemon: Pokemon

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pokemon = new Pokemon()
  }

}
