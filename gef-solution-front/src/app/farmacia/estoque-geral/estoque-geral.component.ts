import { Component, OnInit } from '@angular/core';
import { FarmaciaApiService } from '../farmacia.service';
import { Estoque, TipoMedicamento } from '../medicamento/medicamento-type';
import { Response } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-estoque-geral',
  templateUrl: './estoque-geral.component.html',
  styleUrls: ['./estoque-geral.component.css']
})
export class EstoqueGeralComponent implements OnInit {

  itensEstoque: Estoque[] = [];
  itensEstoquePesquisa: Estoque[] = [];
  tipoMedicamentos: TipoMedicamento[] = [];
  idTipoMedicamento: any;
  p: number = 1;
  opcaoFiltro: number = 0;
  textoPesquisa: string = "";

  constructor(protected farmaciaService: FarmaciaApiService) {

  }

  ngOnInit() {
    this.listarEstoque();
    this.listarTipoMedicamentos();

  }



  listarEstoque() {
    this.farmaciaService.listarEstoque()
      .subscribe((response: Response) => {
        console.log(this.itensEstoque);
        this.itensEstoque = response.json();
        this.itensEstoquePesquisa = response.json();
      });
  }


  listarTipoMedicamentos() {
    this.farmaciaService.listarTipoMedicamentos()
      .subscribe((response: Response) => {
        this.tipoMedicamentos = response.json();
      });
  }

  pesquisar() {
    console.log(this.textoPesquisa);

    if (this.textoPesquisa != null || this.textoPesquisa != undefined || this.textoPesquisa != "") {
      this.itensEstoquePesquisa = this.itensEstoque.filter((item) => item.medicamento.nomeMedicamento.toUpperCase().match(this.textoPesquisa.toUpperCase()));
    }
    else {
      this.itensEstoquePesquisa = this.itensEstoque;
    }
  }

  filtrar(opcao: string) {
    console.log(opcao);

    switch (opcao) {

      //Maior Vencimento
      case "1":
        this.itensEstoquePesquisa = this.itensEstoquePesquisa.sort((a: Estoque, b: Estoque) => {
          return new Date(b.vencimento).getTime() - new Date(a.vencimento).getTime()
        });
        break;

      //Menor Vencimento
      case "2":
        this.itensEstoquePesquisa = this.itensEstoquePesquisa.sort((a: Estoque, b: Estoque) => {
          return new Date(a.vencimento).getTime() - new Date(b.vencimento).getTime()
        });
        break;

      //Maior Estoque

      case "3":
      this.itensEstoquePesquisa = this.itensEstoquePesquisa.sort((a: Estoque, b: Estoque) => {
        return b.quantidadeEstoque - a.quantidadeEstoque
      });
        break;

      //Menor Estoque
      case "4":
      this.itensEstoquePesquisa = this.itensEstoquePesquisa.sort((a: Estoque, b: Estoque) => {
        return a.quantidadeEstoque - b.quantidadeEstoque
      });
        break;

      default:
        console.log('nem');
        this.itensEstoquePesquisa = this.itensEstoque;

        break;
    }
  }

 
statusEstoque(estoque: Estoque) : string{
  
  if(estoque.vencimento < new Date())
  {
    return "Vencido";
  }
}

}
