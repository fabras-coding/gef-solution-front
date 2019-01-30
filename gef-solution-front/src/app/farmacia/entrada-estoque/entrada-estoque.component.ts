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
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

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
  textoUnidadeMedida: string = '';
  textoPadrao: string;
  formControlValue:string = '';
  nomesMedicamento: string[]= [];
  textoVencimento: string= "";
  

  @Input() nomeMedicamento: string;

  constructor(private util: UtilityService, protected famarciaService: FarmaciaApiService, private route: ActivatedRoute, private router: Router) {
    this.itemEstoque = new ItemEstoque();
  }


  ngOnInit() {

    this.closeModal();
    this.idRecebido = this.route.snapshot.paramMap.get("id");
    this.listarMedicamentos();

    this.textoPadrao = "Selecione...";
    
  }


  listarMedicamentos()  {
     this.famarciaService.listarMedicamentos()
      .subscribe((response: Response) => {
        this.medicamentos = response.json();
        this.medicamentos.forEach(element => {
          this.nomesMedicamento.push(element.nomeMedicamento);
        });
        this.selecionaMedicamento();

      });

    
  }

  listarUnidadesMedida(){
    this.famarciaService.listarUnidadesMedida()
    .subscribe((response: Response) => {
      this.unidadesMedida = response.json();
    })
  }

  addItem() {

    var novoItem = new ItemEstoque();
    var medEstoque = new MedicamentoEstoque();
    medEstoque.id = this.idMedicamento;


    novoItem.medicamento = medEstoque;
    novoItem.quantidadeEstoque = this.itemEstoque.quantidadeEstoque;
    novoItem.procedencia = this.itemEstoque.procedencia;
    novoItem.vencimentoFormatado = formatDate(this.itemEstoque.vencimento, 'dd/MM/yyyy', 'en-US');
    novoItem.vencimento = this.itemEstoque.vencimento;

    this.itensEstoque.push(novoItem);
  }

  removeItem(index: number){
    this.itensEstoque.splice(index, 1);
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

      console.log(element.vencimento);

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
            
            document.getElementById("modalErro").click();
            document.getElementById("paragrafoMensagem").innerText = "Ocorreu um erro inesperado.";
            

          }
        );

    });


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


  setaUnidadeMedida(){
    var med = this.medicamentos.filter((item)=> item.nomeMedicamento == this.formControlValue.replace("@","").trim())[0];

    this.idMedicamento = med.id;
    this.textoUnidadeMedida = med.unidadeMedida.descricaoUnidadeMedida;   
    
  }


  selecionaMedicamento(){
    var med = this.medicamentos.filter((item)=> item.guid == this.idRecebido)[0];

    this.idMedicamento = med.id;
    this.formControlValue = med.nomeMedicamento;
    document.getElementById("textAreaMedicamento").setAttribute("disabled", "true");
    this.setaUnidadeMedida();
  }
 

  

}
