import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { UtilityService } from 'src/service/utility.service';
import { FarmaciaApiService } from '../farmacia.service';
import { Medicamento } from '../medicamento/medicamento-type';
import { FormsModule, NgModel } from '@angular/forms'
import { Response } from '@angular/http';
import { ItemEstoque, MedicamentoEstoque } from './item-estoque';

import { formatDate } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-entrada-estoque',
  templateUrl: './entrada-estoque.component.html',
  styleUrls: ['./entrada-estoque.component.css']
})
export class EntradaEstoqueComponent implements OnInit {

  medicamentos: Medicamento[] = [];
  itensEstoque: ItemEstoque[] = [];
  itemEstoque: ItemEstoque;
  idRecebido: string;
  idMedicamento: number;
  textoPadrao: string;

  @Input() nomeMedicamento: string;

  constructor(private util: UtilityService, protected famarciaService: FarmaciaApiService, private route: ActivatedRoute, private router: Router) {
    this.itemEstoque = new ItemEstoque();

  }


  ngOnInit() {
    this.closeModal();
    this.idRecebido = this.route.snapshot.paramMap.get("id");
    this.listarMedicamentos();

    this.textoPadrao = "Selecione...";

    if (this.idRecebido != null) {
      document.getElementById("ddlMedicamento").setAttribute("disabled", "true");
    }

  }



  listarMedicamentos() {

    this.famarciaService.listarMedicamentos()
      .subscribe((response: Response) => {
        this.medicamentos = response.json();
      });

  }

  getMedicamentos() {

    if (this.idRecebido == null) {

      return this.medicamentos.filter((item) => item.ativo === true);

    }
    else {

      this.idMedicamento = (this.medicamentos.filter((item) => item.guid === this.idRecebido).map(x => x.id))[0];
      return this.medicamentos.filter((item) => item.guid === this.idRecebido);
    }
  }

  addItem() {

    var novoItem = new ItemEstoque();
    var medEstoque = new MedicamentoEstoque();
    medEstoque.id = this.idMedicamento;


    novoItem.medicamento = medEstoque;
    novoItem.quantidadeEstoque = this.itemEstoque.quantidadeEstoque;
    novoItem.vencimento = formatDate(this.itemEstoque.vencimento, 'yyyy-MM-dd ', 'en-US');
    novoItem.procedencia = this.itemEstoque.procedencia;


    this.itensEstoque.push(novoItem);
  }

  selectOption(id: number) {
    this.idMedicamento = id;

  }

  openModal(template: TemplateRef<any>) {
    this.util.openModal(template);
  }

  closeModal() {
    this.util.closeModal();
  }

  addMedicamento() {

    var finalizou: boolean = false;
    var controle: number=0;

    //refatorar essa bosta
    this.itensEstoque.forEach(element => {
      this.famarciaService.postJSONItemEstoque(element)
        .subscribe(
          data => {
            controle++;
            if(controle==this.itensEstoque.length)
            {
              document.getElementById("modalSucesso").click();

            }
          },
          error => {
            document.getElementById("paragrafoMensagem").innerText = error;
            document.getElementById("templateMessage").click();

          }
        );

    });

    if (finalizou) {
    }

  }


  redirecionaInicio() {
    this.closeModal();
    this.router.navigate(['inicio']);
  }




}
