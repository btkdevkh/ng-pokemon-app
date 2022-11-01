import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable, tap, catchError, of } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(
    private http: HttpClient
  ) {}

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap(pokemonList => this.log(pokemonList)),
      catchError(err => this.err(err, []))
    )
  }

  getPokemonById(id: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${id}`).pipe(
      tap(pokemon => this.log(pokemon)),
      catchError((err) => this.err(err, undefined))
    )
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    return this.http.put<Pokemon>(`api/pokemons`, pokemon, headers).pipe(
      tap(pokemon => this.log(pokemon)),
      catchError((err) => this.err(err, null))
    )
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    return this.http.post<Pokemon>(`api/pokemons`, pokemon, headers).pipe(
      tap(pokemon => this.log(pokemon)),
      catchError((err) => this.err(err, null))
    )
  }

  deletePokemonById(pokemonId: number): Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap(res => this.log('Pokemon deleted')),
      catchError((err) => this.err(err, null))
    )
  }

  searchPokemonListByTerm(term: string): Observable<Pokemon[]> {
    if(term.length <= 1) return of([])
    
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap(res => this.log(res)),
      catchError((err) => this.err(err, []))
    )
  }

  private log(response: Pokemon[]|Pokemon|undefined|string) {
    console.table(response);
  }

  private err(error: Error, errorValue: any) {
    console.log(error);
    return of(errorValue)
  }

  getPokemonTypeList(): string[] {
    return [
      "Plante", 
      "Poison", 
      "Feu", 
      "Eau", 
      "Insecte", 
      "Normal", 
      "Vol", 
      "Insecte", 
      "Electrik", 
      "Fée", 
      "Combat", 
      "Psy"
    ]
  }
}
