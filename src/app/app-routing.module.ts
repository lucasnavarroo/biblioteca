import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroListComponent } from './livros/livro-list/livro-list.component';
import { LivroFormComponent } from './livros/livro-form/livro-form.component';
import { UsuarioFormComponent } from './usuarios/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';

const routes: Routes = [
  {
    path: '',
    component: LivroListComponent
  },
  {
    path: 'addLivro',
    component: LivroFormComponent
  },
  {
    path: 'addUser',
    component: UsuarioFormComponent
  },
  {
    path: 'listaUsuarios',
    component: UsuarioListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
