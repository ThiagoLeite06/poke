import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  readonly baseURL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(this.baseURL)
    .pipe(
      map((res: any) => res.results),
      tap(console.log)
    );
  }

}
