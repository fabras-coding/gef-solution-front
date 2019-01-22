import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Medicamento, TipoMedicamento, ViaAdministracao, UnidadeMedida, MedicamentoCad, PrincipioAtivo } from './medicamento-type';
import { FarmaciaApiService } from '../farmacia.service';
import { UtilityService } from 'src/service/utility.service';
import { Response } from '@angular/http';
import { Subject, Observable, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';



@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})



export class MedicamentoComponent implements OnInit {


  medicamentos: Medicamento[] = [];
  tipoMedicamentos: TipoMedicamento[] = [];
  viasAdministracao: ViaAdministracao[] = [];
  unidadesMedida: UnidadeMedida[] = [];


  idMedicamento: any;
  idViaAdministracao: any;
  idTipoMedicamento: any;
  idUnidadeMedida: any;
  quantidade: number;
  observacao: string = "";
  nomeMedicamento: string = "";
  isNovoItem: boolean = false;
  globalGuid: Guid;


  constructor(private util: UtilityService, protected famarciaService: FarmaciaApiService, private router: Router) {

  }

  ngOnInit() {

    this.iniciaComponentes();

    this.idTipoMedicamento = "Selecione...";
    this.idMedicamento = "Selecione...";
    this.idUnidadeMedida = "Selecione...";
    this.idViaAdministracao = "Selecione...";
  }

  iniciaComponentes() {

    this.listarMedicamentos();
    this.listarTipoMedicamentos();
    this.listarViaAdministracao();
    this.listarUnidadesMedida();
    this.closeModal();

  }

  novoItem() {

    this.isNovoItem = true;
    document.getElementById("ddlMedicamento").style.display = "none";
    document.getElementById("nomeMedicamento").style.display = "block";
    document.getElementById("btnNaoAchou").style.display = "none";
    document.getElementById("btnVoltar").style.display = "block";
  }

  voltaMedicamento() {

    this.isNovoItem = false;
    document.getElementById("ddlMedicamento").style.display = "block";
    document.getElementById("nomeMedicamento").style.display = "none";
    document.getElementById("btnNaoAchou").style.display = "block";
    document.getElementById("btnVoltar").style.display = "none";

  }

  cadastrarMedicamento(insereEstoque: boolean) {

    this.globalGuid = Guid.create();

    var medicamentoCad = new MedicamentoCad();

    var tipoMedicamento = new TipoMedicamento();
    tipoMedicamento.idTipoMedicamento = this.idTipoMedicamento;

    var unidadeMedida = new UnidadeMedida();
    unidadeMedida.idUnidadeMedida = this.idUnidadeMedida;

    var viaAdministracao = new ViaAdministracao();
    viaAdministracao.idViaAdministracao = this.idViaAdministracao;

    var principioAtivo = new PrincipioAtivo();
    principioAtivo.idPrincipioAtivo = 1; // default pra nao dar pau

    medicamentoCad.guid = this.globalGuid.toString();

    medicamentoCad.nomeMedicamento = this.nomeMedicamento;
    medicamentoCad.tipoMedicamento = tipoMedicamento;
    medicamentoCad.observacao = this.observacao;
    medicamentoCad.cadastroCompleto = true;
    medicamentoCad.ativo = true;
    medicamentoCad.quantidadeEstoqueCritico = this.quantidade;
    medicamentoCad.nomeAnvisa = this.nomeMedicamento + " _manual_";
    medicamentoCad.principioAtivo = principioAtivo;
    medicamentoCad.viaAdministracao = viaAdministracao;
    medicamentoCad.unidadeMedida = unidadeMedida;


    if (insereEstoque) {
      this.closeModal();

      

        this.famarciaService.postJSONMedicamento(medicamentoCad).subscribe(
          data => {
            this.router.navigate(['entrada-estoque/' + this.globalGuid]);
          },
          error => {
            alert(error);
          });
      
    }
    else {

     
        this.closeModal();
        this.famarciaService.postJSONMedicamento(medicamentoCad).subscribe(
          data => {
            document.getElementById("modalSucesso").click();

          },
          error => {
            alert(error);
          });

    }
  }

  redirecionaMedicamento() {
    this.closeModal();
    this.router.navigate(['inicio']);
  }


  listarMedicamentos() {

    this.famarciaService.listarMedicamentos()
      .subscribe((response: Response) => {
        this.medicamentos = response.json();
      });
  }

  getMedicamentosDesativados() {

    return this.medicamentos.filter((item) => item.ativo === false);
  }

  listarMedicamentosFake() {
    this.famarciaService.listarMedicamentosFake().subscribe((response: Response) => {
      this.medicamentos = response.json();
    })
  }

  getMedicamentosFakeWithGuid() {
    return this.medicamentos;
  }

  listarTipoMedicamentos() {
    this.famarciaService.listarTipoMedicamentos()
      .subscribe((response: Response) => {
        this.tipoMedicamentos = response.json();
      });
  }

  listarViaAdministracao() {
    this.famarciaService.listarViaAdministracao()
      .subscribe((response: Response) => {
        this.viasAdministracao = response.json();
      })
  }

  listarUnidadesMedida() {
    this.famarciaService.listarUnidadesMedida()
      .subscribe((response: Response) => {
        this.unidadesMedida = response.json();
      })
  }



  openModal(template: TemplateRef<any>) {
    this.util.openModal(template);
  }

  closeModal() {
    this.util.closeModal();
  }



}
