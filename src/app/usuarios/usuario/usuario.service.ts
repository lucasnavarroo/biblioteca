import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from './usuario';
import { USUARIOS } from '../usuarios-mock';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  list(): Observable<Usuario[]> {
    return of(USUARIOS);
  }

  add(usuario: Usuario) {
    USUARIOS.push(usuario);
  }
}