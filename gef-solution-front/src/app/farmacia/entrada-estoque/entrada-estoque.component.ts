import { Component, OnInit, TemplateRef } from '@angular/core';
import { UtilityService } from 'src/service/utility.service';
import { FarmaciaApiService } from '../farmacia.service';
import { Medicamento } from '../medicamento/medicamento-type';
import { Response } from '@angular/http';

@Component({
  selector: 'app-entrada-estoque',
  templateUrl: './entrada-estoque.component.html',
  styleUrls: ['./entrada-estoque.component.css']
})
export class EntradaEstoqueComponent implements OnInit {


   medicamentos: Medicamento[] =[];

  constructor(private util:UtilityService, protected famarciaService: FarmaciaApiService) { 

    
  }

  ngOnInit() {

      this.listarMedicamentos();
      
  }

  listarMedicamentos(){
    this.famarciaService.listarMedicamentos()
    .subscribe((response: Response) => {
        this.medicamentos = response.json();
    });

    
  }

  openModal( template: TemplateRef<any>){
    this.util.openModal(template);
  }

  closeModal(){
    this.util.closeModal();
  }

  mostraMedicamentos(){

    alert(this.medicamentos.toString() );
    // this.medicamentos.forEach(element => {
    //   alert(element.id_medicamento);
    // });


  }

}
