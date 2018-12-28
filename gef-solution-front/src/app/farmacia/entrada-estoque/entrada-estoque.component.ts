import { Component, OnInit, TemplateRef } from '@angular/core';
import { UtilityService } from 'src/service/utility.service';
import { FarmaciaApiService } from '../farmacia.service';
import { Medicamento } from '../medicamento/medicamento-type';
import { FormsModule, NgModel } from '@angular/forms'
import { Response } from '@angular/http';
import { ItemEstoque } from './item-estoque';

@Component({
  selector: 'app-entrada-estoque',
  templateUrl: './entrada-estoque.component.html',
  styleUrls: ['./entrada-estoque.component.css']
})
export class EntradaEstoqueComponent {


   medicamentos: Medicamento[] =[];
   itensEstoque: ItemEstoque[] =[];
   itemEstoque: ItemEstoque;
   
  constructor(private util:UtilityService, protected famarciaService: FarmaciaApiService) { 
    this.itemEstoque = new ItemEstoque();
    
  }

   
  mostraAsParada(){
    alert(this.itemEstoque.nomeMedicamento + ";" + this.itemEstoque.procedencia +";" + this.itemEstoque.quantidade +";"+ this.itemEstoque.unidadeMedida + ";" + this.itemEstoque.vencimento);
  }

  addItem(){
    
    var novoItem = new ItemEstoque();

    novoItem.idMedicamento = this.itemEstoque.idMedicamento;
    novoItem.nomeMedicamento = this.itemEstoque.nomeMedicamento;
    novoItem.procedencia = this.itemEstoque.procedencia;
    novoItem.quantidade = this.itemEstoque.quantidade;
    novoItem.unidadeMedida = this.itemEstoque.unidadeMedida;
    novoItem.vencimento = this.itemEstoque.vencimento;


    this.itensEstoque.push(novoItem);
  }

  openModal( template: TemplateRef<any>){
    this.util.openModal(template);
  }

  closeModal(){
    this.util.closeModal();
  }

  addMedicamento(){

  }
  
}
