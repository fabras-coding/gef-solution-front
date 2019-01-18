import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { UtilityService } from 'src/service/utility.service';
import { FarmaciaApiService } from '../farmacia.service';
import { Medicamento, UnidadeMedida } from '../medicamento/medicamento-type';
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

  unidadesMedida: UnidadeMedida[] =[];
  medicamentos: Medicamento[] = [];
  itensEstoque: ItemEstoque[] = [];
  itemEstoque: ItemEstoque;
  idRecebido: string;
  idMedicamento: number;
  textoUnidadeMedida: string;
  textoPadrao: string;
  formControlValue:string = '';
  nomesMedicamento: string[]= [];
  medicamentoSelecionado : string ;

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
        this.medicamentos.forEach(element => {
          this.nomesMedicamento.push(element.nomeMedicamento);
        });
      });

    
  }

  listarUnidadesMedida(){
    this.famarciaService.listarUnidadesMedida()
    .subscribe((response: Response) => {
      this.unidadesMedida = response.json();
    })
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
    novoItem.vencimento = formatDate(this.itemEstoque.vencimento, 'dd/MM/yyyy ', 'en-US');
    novoItem.procedencia = this.itemEstoque.procedencia;


    this.itensEstoque.push(novoItem);
  }

  removeItem(index: number){
    
    
    this.itensEstoque.splice(index, 1);

  }


  selectOption(id: number) {
    this.idMedicamento = id;
    var medSelecionado = this.medicamentos.filter((item_) => item_.id== id)[0];
    this.textoUnidadeMedida = medSelecionado.unidadeMedida.descricaoUnidadeMedida;
   
    

  }

  openModal(template: TemplateRef<any>) {
    this.util.openModal(template);
  }

  closeModal() {
    this.util.closeModal();
  }

  addMedicamento() {

    var controle: number=0;

    //refatorar
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


  }


  redirecionaInicio() {
    this.closeModal();
    this.router.navigate(['inicio']);
  }

 teste(){
   console.log(this.formControlValue.replace("@",""));
 }

  findChoicesIn(list) {
    
    return (searchText) =>
      list.filter(item => item.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));

  }

  getChoiceLabel(choice: string) {
    return `@${choice} `;
  }

 

  

}
