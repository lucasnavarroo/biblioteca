import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService  
  ) { }

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      login: ['', Validators.required],
      nome: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  save() {
    const usuario = this.usuarioForm.getRawValue() as Usuario;
    this.usuarioService.add(usuario);

    this.usuarioForm.reset();
  }
}

