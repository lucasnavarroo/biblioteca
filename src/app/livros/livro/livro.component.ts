import { Component, OnInit, Input } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  @Input() livro: Livro;

  constructor() { }

  ngOnInit() {
  }

}
