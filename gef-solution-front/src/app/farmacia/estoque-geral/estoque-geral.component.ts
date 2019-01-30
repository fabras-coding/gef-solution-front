import { Component, OnInit } from '@angular/core';
import { FarmaciaApiService } from '../farmacia.service';
import { Estoque, TipoMedicamento } from '../medicamento/medicamento-type';
import { Response } from '@angular/http';

@Component({
  selector: 'app-estoque-geral',
  templateUrl: './estoque-geral.component.html',
  styleUrls: ['./estoque-geral.component.css']
})
export class EstoqueGeralComponent implements OnInit {

  itensEstoque : Estoque[]=[];
  tipoMedicamentos: TipoMedicamento[] = [];
  idTipoMedicamento: any;
  
  constructor(protected farmaciaService : FarmaciaApiService) { 

  }

  ngOnInit() {
    this.listarEstoque();
    this.listarTipoMedicamentos();
    
  }

  

  listarEstoque(){
    this.farmaciaService.listarEstoque()
    .subscribe((response : Response) =>{
      console.log(this.itensEstoque);
      this.itensEstoque =  response.json();
      
    });
  }


  listarTipoMedicamentos() {
    this.farmaciaService.listarTipoMedicamentos()
      .subscribe((response: Response) => {
        this.tipoMedicamentos = response.json();
      });
  }

}
