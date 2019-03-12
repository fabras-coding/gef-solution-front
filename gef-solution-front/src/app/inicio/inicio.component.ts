import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { FarmaciaApiService } from '../farmacia/farmacia.service';
import { Estoque } from '../farmacia/medicamento/medicamento-type';
import { Response } from '@angular/http';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: []
})
export class InicioComponent implements OnInit {


  itensEstoque: Estoque[] = [];
  mensagemVencimento: string;
  mensagemEstoqueCritico: string;

  today = new Date();
  jstoday = '';

  constructor(private router: Router, private farmaciaServiceAPI: FarmaciaApiService) {
    this.jstoday = formatDate(this.today, 'dd/MM/yyyy', 'en-US');
  }

  ngOnInit() {
    this.listarEstoque();
    
  }

  listarEstoque() {
    this.farmaciaServiceAPI.listarEstoque()
      .subscribe((response: Response) => {
        console.log(this.itensEstoque);
        var recieve = response.json();
        recieve.forEach(element => {
          this.itensEstoque.push(element);
        });
      });

      this.criarNotificacoes();
  }

  criarNotificacoes() {

    var itemsVencidos = this.itensEstoque.filter((item) => Date.parse(item.vencimento.toString()) < Date.parse(new Date().toString()))
    var somaMedicamentos = 0;

    console.log("ITENS ESTOQUE ", this.itensEstoque);

    console.log("ITENS VENCIDOS ", itemsVencidos);

    if (itemsVencidos.length > 0) {
      document.getElementById("msgVencimento").outerHTML = "Você tem "+ itemsVencidos.length +" item(s) <b>vencido(s)</b> no <a href='../estoque-geral'>estoque.</a><br/>";
    }

    var itensCriticos: Estoque[] = [];
    this.itensEstoque.forEach(itenEstoque => {

      var medicamentosIguais = this.itensEstoque.filter((x) => x.medicamento.id == itenEstoque.medicamento.id)
      medicamentosIguais.forEach(medIgual => {
        somaMedicamentos += medIgual.quantidadeEstoque;
        if (somaMedicamentos < itenEstoque.medicamento.quantidadeEstoqueCritico) {
          // this.mensagemEstoqueCritico = "Você tem " + itemsVencidos.length + " item(s) no estoque crítico.";
          document.getElementById("msgCritico").outerHTML = "Você tem medicamentos em quantidade <b>crítica</b> no <a href='../estoque-geral'>estoque.</a>";
        }
      });

      somaMedicamentos = 0;
    });


  }


}
