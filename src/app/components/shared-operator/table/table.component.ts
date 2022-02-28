import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public Pokemon: any;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }


  getPokemon() {
    this.pokemonService.getPokemon$.subscribe(resp => {
      this.Pokemon = resp;
      console.log(this.Pokemon);
    })
  }

}
