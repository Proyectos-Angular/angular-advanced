import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  getPokemon$: Observable<any>;

  constructor(private http: HttpClient) {
    this.getPokemon()
  }


  getPokemon() {
    this.getPokemon$ = this.http.get('https://pokeapi.co/api/v2/pokemon').pipe(
      share()
    );
  }


}
