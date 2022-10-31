import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styles: [
  ]
})
export class PokemonEditComponent implements OnInit {
  pokemon: Pokemon|undefined

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const pkmnId: string|null = this.route.snapshot.paramMap.get('id')
    if(pkmnId) {
      this.pokemonService.getPokemonById(+pkmnId).subscribe(pkmn => this.pokemon = pkmn)
    }
  }

}
