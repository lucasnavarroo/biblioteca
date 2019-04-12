import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Livro } from './livro';
import { LIVROS } from '../livros-mock';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor() { }

  list(): Observable<Livro[]> {
    return of(LIVROS);
  }

  add(livro: Livro) {
    LIVROS.push(livro);
  }
}