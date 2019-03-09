import { Component, OnInit, TemplateRef } from '@angular/core';
import { UtilityService } from 'src/service/utility.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { FarmaciaApiService } from 'src/app/farmacia/farmacia.service';
import { Parametro, ParametroCad } from './parametro.type';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  constructor(private util: UtilityService,  private router: Router, protected famarciaApiservice : FarmaciaApiService) { }

  parametros : Parametro[] = [];
  parametrosAlteracao : ParametroCad[] =[];
  parametrosExibicao : Parametro[] = [];
  quantidadeDias: number;
  percentual: string;

  ngOnInit() {
    this.listaParametros();
    
  }

  setaValorCampos()  {

    this.quantidadeDias =  parseInt(this.parametros.filter(x=> x.descricao == "dias_vencimento")[0].valor);
    this.percentual = this.parametros.filter(x=> x.descricao == "percentual_estoque")[0].valor;

  }

  salvarParametros(){

    var parametro = this.parametros.filter(x=> x.descricao == "dias_vencimento")[0];
    var parametro2 = this.parametros.filter(x=> x.descricao == "percentual_estoque")[0];

     var paramAlteracao1 = new ParametroCad();
     paramAlteracao1 = parametro;
     paramAlteracao1.valor = this.quantidadeDias.toString();

     var paramAlteracao2 = new ParametroCad();
     paramAlteracao2 = parametro2;
     paramAlteracao2.valor = this.percentual;
     
      console.log(paramAlteracao1);
      console.log(paramAlteracao2);

     this.famarciaApiservice.putJsonParametro(paramAlteracao1, parametro.idParametro).subscribe(
      data => {
       //ok
        console.log("primeiro foi");
      },
      error =>{
        console.log(error);
      }
     );
     this.famarciaApiservice.putJsonParametro(paramAlteracao2, parametro2.idParametro).subscribe(
      data => {
        document.getElementById("modalSucesso").click();
        console.log("segundo foi foi");

      },
      error =>{
        console.log(error);

        document.getElementById("modalErro").click();
      }
     );

  }
  
  openModal(template: TemplateRef<any>) {
    this.util.openModal(template);
  }

  closeModal() {
    this.util.closeModal();
  }

  
  redirecionaMedicamento() {
    this.closeModal();
    this.router.navigate(['inicio']);
  }


  listaParametros(){
    
    this.famarciaApiservice.listaParametros()
    .subscribe((response: Response) => {
      this.parametros = response.json();
      this.parametros.forEach(element => {
        this.setaValorCampos();
      });
    });

  }

}
