import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-importacao',
  templateUrl: './listar-importacao.component.html',
  styleUrls: ['./listar-importacao.component.css']
})
export class ListarImportacaoComponent implements OnInit {

  constructor(
    public route: Router
  ) { }

  ngOnInit() {
  }

  voltarPaginaInicial() {
    this.route.navigate([""]);
  }

  displayedColumns: string[] = ['dataentrega', 'descricao', 'quantidade', 'valorunitario'];
  dataSource = ELEMENT_DATA;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { dataentrega: 1, descricao: 'Hydrogen', quantidade: 1.0079, valorunitario: 10.00 }
];

export interface PeriodicElement {
  descricao: string;
  dataentrega: number;
  quantidade: number;
  valorunitario: number;
}
