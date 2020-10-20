import { Component, OnInit } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PokeService } from './poke.service';



@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.scss']
})
export class PokeComponent implements OnInit {

  pokes$: Observable<any>;

  constructor(private pokeService: PokeService) { }

  ngOnInit(): void {
    this.pokes$ = this.pokeService.list();
  }
}
