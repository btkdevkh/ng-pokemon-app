import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';
import { PokemonAddComponent } from './pokemon-add/pokemon-add.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

const pokemonRoutes: Routes = [
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemons/add', component: PokemonAddComponent, canActivate: [AuthGuard] },
  { path: 'pokemons/:id', component: PokemonDetailsComponent },
  { path: 'pokemons/edit/:id', component: PokemonEditComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonListComponent,
    PokemonDetailsComponent,
    PokemonFormComponent,
    PokemonEditComponent,
    PokemonAddComponent,
    PokemonSearchComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes),
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
