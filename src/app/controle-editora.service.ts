import { Injectable } from '@angular/core';
import { Editora } from './Editora';

@Injectable({
  providedIn: 'root'
})

export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: "Abril" },
    { codEditora: 2, nome: "SM" },
    { codEditora: 3, nome: "Ática" },
    { codEditora: 4, nome: "Aleph" }
];

  constructor() {}

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter(e => e.codEditora == codEditora);
      return editora[0].nome;
  }
}
