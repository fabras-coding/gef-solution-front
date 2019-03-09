import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Medicamento, TipoMedicamento, ViaAdministracao, UnidadeMedida, MedicamentoCad, PrincipioAtivo } from '../../farmacia/medicamento/medicamento-type'
import { FarmaciaApiService } from '../../farmacia/farmacia.service';
import { UtilityService } from 'src/service/utility.service';
import { Response } from '@angular/http';
import { Subject, Observable, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { FormControlName } from '@angular/forms';



@Component({
  selector: 'app-alteracao-medicamento',
  templateUrl: './alteracao-medicamento.component.html',
  styleUrls: ['./alteracao-medicamento.component.css']
})



export class AlteracaoMedicamentoComponent implements OnInit {


  medicamentos: Medicamento[] = [];
  tipoMedicamentos: TipoMedicamento[] = [];
  viasAdministracao: ViaAdministracao[] = [];
  unidadesMedida: UnidadeMedida[] = [];


  med: MedicamentoCad;
  idMedicamento: any;
  idViaAdministracao: any;
  idTipoMedicamento: any;
  idUnidadeMedida: any;
  quantidade: number;
  observacao: string = "";
  nomeMedicamento: string = "";
  isNovoItem: boolean = false;
  globalGuid: Guid;
  nomesMedicamento: string[] = [];
  formControlValue: string = '';

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

  listarMedicamentos() {
    this.famarciaService.listarMedicamentos()
      .subscribe((response: Response) => {
        this.medicamentos = response.json();
        this.medicamentos.forEach(element => {
          this.nomesMedicamento.push(element.nomeMedicamento);
        });
        this.selecionaMedicamento();

      });


  }


  selecionaMedicamento() {
    //var med = this.medicamentos.filter((item)=> item.guid == this.idRecebido)[0];

    //this.idMedicamento = med.id;
    //this.formControlValue = med.nomeMedicamento;
    //document.getElementById("textAreaMedicamento").setAttribute("disabled", "true");
    //this.setaUnidadeMedida();
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

  alterarMedicamento() {

    var medicamentoAlteracao = this.med;

    
    medicamentoAlteracao.tipoMedicamento.idTipoMedicamento = this.idTipoMedicamento;
    medicamentoAlteracao.viaAdministracao.idViaAdministracao = this.idViaAdministracao  ;
    medicamentoAlteracao.unidadeMedida.idUnidadeMedida = this.idUnidadeMedida ;
    medicamentoAlteracao.quantidadeEstoqueCritico = this.quantidade;
    medicamentoAlteracao.observacao =this.observacao;

    this.famarciaService.putJSONMedicamento(medicamentoAlteracao, this.idMedicamento).subscribe(
      data => {
        document.getElementById("modalSucesso").click();

      },
      error =>{
        console.log(error);

        document.getElementById("modalErro").click();
      }
    ) ;

  }

  redirecionaMedicamento() {
    this.closeModal();
    this.router.navigate(['inicio']);
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


  findChoicesIn(list) {

    return (searchText) =>
      list.filter(item => item.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));

  }

  getChoiceLabel(choice: string) {
    return `@${choice} `;
  }

  habilitaCampos() {

    var medSelecionado = this.medicamentos.filter((item) => item.nomeMedicamento == this.formControlValue.replace("@", "").trim())[0];
    this.med = medSelecionado;

    if (this.med != undefined && this.med != null) {
      document.getElementById("ddlTipo").removeAttribute("disabled");
      document.getElementById("ddlViaAdministracao").removeAttribute("disabled");
      document.getElementById("ddlUnidadeMedida").removeAttribute("disabled");
      document.getElementById("numberQtde").removeAttribute("disabled");
      document.getElementById("txtObservacao").removeAttribute("disabled");
      document.getElementById("btnEntradaEstoque2").removeAttribute("disabled");
    }


    // this.idMedicamento = medSelecionado.id;
    // this.med.tipoMedicamento = medSelecionado.tipoMedicamento;
    // this.med.unidadeMedida = medSelecionado.unidadeMedida;
    // this.med.viaAdministracao = medSelecionado.viaAdministracao;
    // this.med.


    this.idMedicamento = medSelecionado.id;
    this.idTipoMedicamento = medSelecionado.tipoMedicamento.idTipoMedicamento;
    this.idViaAdministracao = medSelecionado.viaAdministracao.idViaAdministracao;
    this.idUnidadeMedida = medSelecionado.unidadeMedida.idUnidadeMedida;
    this.quantidade = medSelecionado.quantidadeEstoqueCritico;
    this.observacao = medSelecionado.observacao;

  }

}
