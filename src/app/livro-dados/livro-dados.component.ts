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
  public livro: Livro = new Livro(0,0,'','',[]);
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = () => {
    this.livro.autores = this.autoresForm.split('\n').filter(autor => autor.trim() !== '');
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }
}
