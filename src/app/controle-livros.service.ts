import { Injectable } from '@angular/core';
import { Livro } from './Livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: "Mundos Paralelos",
      resumo: "A Mundo Estranho acaba de lançar seu Primeiro Livro De Ficção! “Mundos Paralelos” traz contos inéditos de fantasia e ficção cientifica de dez dos autores mais populares do Wattpad Brasil.",
      autores: ["Vários autores"],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: "Sem Fôlego",
      resumo: "As histórias de duas crianças distanciadas por meio século se entrelaçam em fascinante simetria: uma em palavras, outra em imagens. Em silêncio, o menino sofre com a ausência do pai, e a menina acompanha de longe a carreira da mãe famosa. Ambos sonham com uma vida diferente, até o dia em que decidem fugir de casa e aventurar-se em uma busca desesperada por aquilo de que mais sentem falta. Um livro de tirar o fôlego, que surpreende o leitor com uma trama cinematográfica sobre temas aparentemente díspares, como os gabinetes de curiosidades e a criação do cinema falado.",
      autores: ["Brian Selznick"],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: "O Alienista",
      resumo: "O doutor Simão Bacamarte funda um hospício na pequena Itaguaí. Mas suas ideias sobre loucura são tão inflexíveis que ele interna a cidade inteira. Uma das mais irônicas e sombrias histórias de Machado de Assis.",
      autores: ["Machado de Assis"],
    },
];

  constructor() {}

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro) {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number) {
      this.livros.splice(this.livros.findIndex(l => l.codigo === codigo), 1);
  }
}
