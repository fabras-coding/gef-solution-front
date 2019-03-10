import { Component, OnInit } from '@angular/core';
import { FarmaciaApiService } from '../farmacia.service';
import { Estoque, TipoMedicamento } from '../medicamento/medicamento-type';
import { Response } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Parametro } from 'src/app/configuracao/alertas/parametro.type';
import { formatDate } from '@angular/common';

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

  parametros: Parametro[] = [];

  constructor(protected farmaciaService: FarmaciaApiService) {

  }

  ngOnInit() {
    this.listarEstoque();
    this.listarTipoMedicamentos();
    this.getParametros();
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


  itemVencido(estoque: Estoque): boolean {

    var dataEstoque = Date.parse(estoque.vencimento.toString());
    var dataAtual = Date.parse(new Date().toString());

    if (dataEstoque < dataAtual) {
      return true;
    }
    return false;

  }

  itemPertoDeVencer(estoque: Estoque): boolean {

    var dataVencimentoEstoque = estoque.vencimento;

    var dataAtual = Date.parse(new Date().toString());

    var diasAntesVencimento: string = "";

    diasAntesVencimento = this.parametros.filter((item) => item.descricao != "dias_vencimento")[0].valor;

    var dataPrevista = new Date(estoque.vencimento.toString());

    dataPrevista.setDate(dataPrevista.getDate() - parseInt(diasAntesVencimento));

    if ((Date.parse(dataVencimentoEstoque.toString()) > dataAtual) && (Date.parse(dataPrevista.toString()) < dataAtual)) {
      return true;
    }
    return false;;
    

  }

  itemDoEstoqueCritico(estoque: Estoque) : boolean {

    var itensCount = this.itensEstoque.filter(x=> x.medicamento.id == estoque.medicamento.id);
    var quantidadeCritica = itensCount[0].medicamento.quantidadeEstoqueCritico;
    var quantidadeEstoqueSomado = 0;

    itensCount.forEach(element => {
      quantidadeEstoqueSomado += element.quantidadeEstoque;
    });

    if(quantidadeEstoqueSomado<quantidadeCritica)
    {
      return true
    }
    return false;
  }


  itemPertoDoEstoqueCritico(estoque: Estoque) : boolean {

    var itensCount = this.itensEstoque.filter(x=> x.medicamento.id == estoque.medicamento.id);
    var percentualParaEstoqueCritico = parseInt(this.parametros.filter((item)=> item.descricao=="percentual_estoque")[0].valor);
    var quantidadeCritica = itensCount[0].medicamento.quantidadeEstoqueCritico;


    var quantidadeEstoqueSomado = 0;

    itensCount.forEach(element => {
      quantidadeEstoqueSomado += element.quantidadeEstoque;
    });

    var quantidadeDoPercentualCritico = ((quantidadeCritica * percentualParaEstoqueCritico)/100) + quantidadeCritica;

    if((quantidadeEstoqueSomado < quantidadeDoPercentualCritico) && (quantidadeEstoqueSomado > quantidadeCritica) )
    {
      return true
    }
    return false;
  }

  getParametros() {

    this.farmaciaService.listaParametros()
      .subscribe((response: Response) => {
        this.parametros = response.json();
      });


  }


}
