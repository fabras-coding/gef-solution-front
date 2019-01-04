import { Component, OnInit, TemplateRef } from '@angular/core';
import { Medicamento, Estoque, TipoMedicamento, ViaAdministracao, UnidadeMedida } from './medicamento-type';
import { FarmaciaApiService } from '../farmacia.service';
import { UtilityService } from 'src/service/utility.service';
import { Response } from '@angular/http';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent implements OnInit {

  
  medicamentos: Medicamento[] =[];
  tipoMedicamentos: TipoMedicamento[] =[];
  viasAdministracao: ViaAdministracao[] = [];
  unidadesMedida: UnidadeMedida[]=[];


  quantidade: string= "";
  observacao: string="";


  constructor(private util:UtilityService, protected famarciaService: FarmaciaApiService) { 

    
  }

 
  ngOnInit() {
  
    this.caralho();

    this.listarMedicamentos();
    this.listarTipoMedicamentos();
    this.listarViaAdministracao();
    this.listarUnidadesMedida();
    this.closeModal();
    
  }

  caralho(){
    var teste1: string= null;

    this.quantidade = teste1;
    this.observacao= teste1;
  }


  listarMedicamentos(){
    
    this.famarciaService.listarMedicamentos()
      .subscribe((response: Response) =>{
        this.medicamentos = response.json();
      });
  }

  getMedicamentosDesativados() {
    return this.medicamentos.filter((item) => item.ativo === false);
  }

  listarTipoMedicamentos(){
    this.famarciaService.listarTipoMedicamentos()
    .subscribe((response:Response)=>{
      this.tipoMedicamentos = response.json();
    });
  }

  listarViaAdministracao(){
    this.famarciaService.listarViaAdministracao()
    .subscribe((response:Response)=>{
      this.viasAdministracao = response.json();
    })
  }

  listarUnidadesMedida(){
    this.famarciaService.listarUnidadesMedida()
    .subscribe((response:Response)=>{
      this.unidadesMedida = response.json();
    })
  }

  
  openModal( template: TemplateRef<any>){
    this.util.openModal(template);
  }

  closeModal(){
    this.util.closeModal();
  }

  

}
