import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { UtilityService } from 'src/service/utility.service';
import { FarmaciaApiService } from '../farmacia.service';
import { Medicamento } from '../medicamento/medicamento-type';
import { FormsModule, NgModel } from '@angular/forms'
import { Response } from '@angular/http';
import { ItemEstoque, MedicamentoEstoque } from './item-estoque';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entrada-estoque',
  templateUrl: './entrada-estoque.component.html',
  styleUrls: ['./entrada-estoque.component.css']
})
export class EntradaEstoqueComponent implements OnInit {
  
  ngOnInit()  {
    this.closeModal();

    this.testaParametro();
  }


   medicamentos: Medicamento[] =[];
   itensEstoque: ItemEstoque[] =[];
   itemEstoque: ItemEstoque;

   @Input() nomeMedicamento : string;
   
  constructor(private util:UtilityService, protected famarciaService: FarmaciaApiService, private route: ActivatedRoute) { 
    this.itemEstoque = new ItemEstoque();
    
  }

  testaParametro(){
    alert(this.route.snapshot.paramMap.get("id"));
  }
   
  listarMedicamentos(){

    this.famarciaService.listarMedicamentos()
      .subscribe((response: Response) => {
        this.medicamentos = response.json();
      });

  }

  addItem(){
    
    var novoItem = new ItemEstoque();
    var medEstoque = new MedicamentoEstoque();
    medEstoque.id = 3;
    // adicionar Guid

    novoItem.medicamento = medEstoque;
    novoItem.quantidade = this.itemEstoque.quantidade;
    novoItem.vencimento = formatDate(this.itemEstoque.vencimento, 'yyyy-MM-dd ', 'en-US')  ;


    this.itensEstoque.push(novoItem);
  }

  openModal( template: TemplateRef<any>){
    this.util.openModal(template);
  }

  closeModal(){
    this.util.closeModal();
  }

  addMedicamento(){

    this.famarciaService.postJSONItemEstoque(this.itensEstoque[0])
    .subscribe(
      data => {
        alert("funfou");
      },
      error => {
        alert("nao funfou. " + error);
      }
    );

  }

  
  
}
