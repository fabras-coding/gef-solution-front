import { Component, OnInit } from '@angular/core';
import { Medicamento } from './medicamento-type';
import { FarmaciaApiService } from '../farmacia.service';
import { UtilityService } from 'src/service/utility.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent implements OnInit {

  
  medicamentos: Medicamento[] =[];

  constructor(private util:UtilityService, protected famarciaService: FarmaciaApiService) { 

    
  }

  ngOnInit() {
    this.listarMedicamentos();
  }

  listarMedicamentos(){
    this.famarciaService.listarMedicamentos()
      .subscribe((response: Response) =>{
        this.medicamentos = response.json();
      });
  }

}
