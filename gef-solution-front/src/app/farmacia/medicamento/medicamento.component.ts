import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import { Medicamento, TipoMedicamento, ViaAdministracao, UnidadeMedida, MedicamentoCad } from './medicamento-type';
import { FarmaciaApiService } from '../farmacia.service';
import { UtilityService } from 'src/service/utility.service';
import { Response } from '@angular/http';
import { Subject, Observable, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';



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


  idMedicamento: number;
  idViaAdministracao: number;
  idTipoMedicamento :number;
  idUnidadeMedida: number;
  quantidade: number;
  observacao: string="";
  nomeMedicamento: string="";


  constructor(private util:UtilityService, protected famarciaService: FarmaciaApiService) { 
    
    
  }

 
  ngOnInit() {
  
    this.iniciaComponentes();
    
  }

  iniciaComponentes(){

    
    this.listarMedicamentos();
    this.listarTipoMedicamentos();
    this.listarViaAdministracao();
    this.listarUnidadesMedida();
    this.closeModal();

    

    
  }

  novoItem(){

    document.getElementById("ddlMedicamento").style.display = "none";
    document.getElementById("nomeMedicamento").style.display = "block";
    document.getElementById("btnNaoAchou").style.display = "none";
    document.getElementById("btnVoltar").style.display = "block";
  }

  voltaMedicamento(){

    document.getElementById("ddlMedicamento").style.display = "block";
    document.getElementById("nomeMedicamento").style.display = "none";
    document.getElementById("btnNaoAchou").style.display = "block";
    document.getElementById("btnVoltar").style.display = "none";
    

  }

  cadastrarMedicamento(){
     var medicamentoCad = new MedicamentoCad();

     medicamentoCad.id = this.idMedicamento;
     medicamentoCad.idTipo = this.idTipoMedicamento;
     medicamentoCad.idUnidadeMedida = this.idUnidadeMedida;
     medicamentoCad.idViaAdministracao = this.idViaAdministracao;
     medicamentoCad.nomeMedicamento = this.nomeMedicamento;
     medicamentoCad.observacao = this.observacao;
     medicamentoCad.quantidadeEstoqueCritico = this.quantidade;
     medicamentoCad.idPrincipioAtivo =1 ; //default pra nao dar pau

     this.famarciaService.postJSONMedicamento(medicamentoCad);
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

//TODO: Parte que faz o autoComplete do autoComplete do medicamento funcionar (mas o css nao ficou legal e nao vou checar agora)
  model: any;

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ?this.medicamentos.map( x => x.nomeMedicamento)
        : this.medicamentos.map(z=> z.nomeMedicamento) .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }
  //Fim AutoComplete

  
  openModal( template: TemplateRef<any>){
    this.util.openModal(template);
  }

  closeModal(){
    this.util.closeModal();
  }

  

}
