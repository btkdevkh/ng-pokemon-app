import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
})
export class PokemonDetailsComponent implements OnInit {

  pokemonList: Pokemon[]
  pokemon: Pokemon|undefined
  isEdit: boolean
  isAuth: boolean

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isAuth = this.authService.isLoggedIn
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id')
    if(!pokemonId) return
    this.pokemonService.getPokemonById(+pokemonId).subscribe(pkmn => this.pokemon = pkmn)
  }

  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemonById(pokemon.id).subscribe(() => this.goBack())
  }

  goBack() {
    this.router.navigate(['/pokemons'])
  }

}
