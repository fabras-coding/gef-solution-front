import { Component, OnInit, TemplateRef } from '@angular/core';
import { UtilityService } from 'src/service/utility.service';
import { FarmaciaApiService } from '../farmacia.service';
import { Response } from '@angular/http';
import { UnidadeMedida, Medicamento } from '../medicamento/medicamento-type';
import { Router } from '@angular/router';
import { ItemEstoque } from '../entrada-estoque/item-estoque';
import { formatDate } from '@angular/common';
import { ItemEstoqueBaixa, TransacaoBaixa, Estoque, MedicamentoEstoque } from './item-baixa-estoque';

@Component({
  selector: 'app-saida-estoque',
  templateUrl: './saida-estoque.component.html',
  styleUrls: ['./saida-estoque.component.css']
})
export class SaidaEstoqueComponent implements OnInit {

  formControlValue: string = '';

  unidadesMedida: UnidadeMedida[] = [];
  medicamentos: Medicamento[] = [];
  nomesMedicamento: string[] = [];
  idMedicamento: number;
  textoUnidadeMedida: string = '';
  itensEstoque: ItemEstoqueBaixa[] = [];
  quantidadeRetirar: number;
  itemsBaixa: ItemEstoqueBaixa[] = [];


  constructor(private util: UtilityService, protected famarciaService: FarmaciaApiService, private router: Router) { }

  ngOnInit() {

    this.closeModal();
    this.listarMedicamentos();

  }





  listarMedicamentos() {
    this.famarciaService.listarMedicamentos()
      .subscribe((response: Response) => {
        this.medicamentos = response.json();
        this.medicamentos.forEach(element => {
          this.nomesMedicamento.push(element.nomeMedicamento);
        });


      });


  }

  listarUnidadesMedida() {
    this.famarciaService.listarUnidadesMedida()
      .subscribe((response: Response) => {
        this.unidadesMedida = response.json();
      })
  }


  setaUnidadeMedida() {
    var med = this.medicamentos.filter((item) => item.nomeMedicamento == this.formControlValue.replace("@", "").trim())[0];

    this.idMedicamento = med.id;
    this.textoUnidadeMedida = med.unidadeMedida.descricaoUnidadeMedida;

  }

  carregaEstoque() {
    var resultado: ItemEstoqueBaixa[] = [];
    this.itensEstoque.splice(0, this.itensEstoque.length);

    this.famarciaService.listarEstoque().subscribe((response: Response) => {
      resultado = response.json();
      resultado.forEach(el => {
        if (el.medicamento.id == this.idMedicamento) {
          el.vencimentoFormatado = formatDate(el.vencimento, 'dd/MM/yyyy', 'en-US');
          this.itensEstoque.push(el);
        }
      })
    })


  }

  incluiItemBaixa(index: number) {


    if (this.itemsBaixa.length == 0) {
      this.itemsBaixa.push(this.itensEstoque[index]);
    }
    else {

      for (let indexFor = 0; indexFor < this.itensEstoque.length; indexFor++) {
        const curretElement = this.itensEstoque[indexFor];
        const clickedElement = this.itensEstoque[index];

        if (index == indexFor) {
          var itemBusca = this.itemsBaixa.find(x => x.idEstoque == clickedElement.idEstoque);

          if (itemBusca != undefined || itemBusca != null) {
            this.itemsBaixa.splice(this.itemsBaixa.indexOf(itemBusca), 1);
          }
          else {
            this.itemsBaixa.push(curretElement);
          }
        }
      }

    }

  }

  efetuaBaixaEstoque() {

    if (this.itemsBaixa.some(x => x.quantidadeEstoque < this.quantidadeRetirar)) {
      document.getElementById("modalErro").click();
      document.getElementById("paragrafoMensagem").innerText = "Algum dos itens que você selecionou possui quantidade menor do que a quantidade a retirar. Por favor, verifique e tente novamente.";
    }
    else {
      ///call method

      var controle: number = 0;

      this.itemsBaixa.forEach(el => {

        var transacao = new TransacaoBaixa()

        transacao.estoque =  new Estoque();
        transacao.estoque.idEstoque = el.idEstoque;
        transacao.idReceita = 1;
        transacao.medicamento = new MedicamentoEstoque();
        transacao.medicamento.id = el.medicamento.id;
        transacao.quantidade = this.quantidadeRetirar;
        transacao.eTipoTransacao = 1;
        transacao.dataTransacao = new Date();

        this.famarciaService.postJSONBaixaEstoque(transacao).subscribe(

          data => {

            controle++;
            if (controle == this.itemsBaixa.length) {
              document.getElementById("modalSucesso").click();

            }
          },
          error => {
            document.getElementById("modalErro").click();
            document.getElementById("paragrafoMensagem").innerText = "Ocorreu um erro inesperado.";

          }

        );
      })


    }
  }

  redirecionaInicio() {
    this.closeModal();
    this.router.navigate(['inicio']);
  }


  findChoicesIn(list) {

    return (searchText) =>
      list.filter(item => item.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));

  }

  getChoiceLabel(choice: string) {
    return `@${choice} `;
  }




  openModal(template: TemplateRef<any>) {
    this.util.openModal(template);
  }

  closeModal() {
    this.util.closeModal();
  }


}
