import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LivroService } from '../livro/livro.service';
import { Livro } from '../livro/livro';

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {

  livroForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private livroService: LivroService  
  ) { }

  ngOnInit() {
    this.livroForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      descricao: ['', Validators.required],
      capa: [''],
      valor: ['', Validators.required],
    });
  }

  save() {
    const livro = this.livroForm.getRawValue() as Livro;
    this.livroService.add(livro);

    this.livroForm.reset();
  }

}
