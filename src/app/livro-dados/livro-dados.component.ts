import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from '../Livro';
import { Editora } from '../Editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent {
  public livro: Livro;
  public autoresForm: string;
  public editoras: Array<Editora>;

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {
    this.livro = new Livro();
    this.autoresForm = '';
    this.editoras = [];
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm
    .split('\n') //separa os autores em substrings pela quebra de linha
    .filter(autor => autor.trim() !== ''); // remove espaços vazios dos autores
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }
}
