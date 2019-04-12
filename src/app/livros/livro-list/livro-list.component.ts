import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro/livro';
import { LivroService } from '../livro/livro.service';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.css']
})
export class LivroListComponent implements OnInit {

  livros: Livro[];

  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.livroService.list()
      .subscribe(livros => this.livros = livros);
  }

}
