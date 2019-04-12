import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroComponent } from './livros/livro/livro.component';
import { LivroListComponent } from './livros/livro-list/livro-list.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LivroFormComponent } from './livros/livro-form/livro-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuarios/usuario-form/usuario-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LivroComponent,
    LivroListComponent,
    MenuComponent,
    LivroFormComponent,
    UsuarioComponent,
    UsuarioListComponent,
    UsuarioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
