import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { MedicamentoCad } from "../farmacia/medicamento/medicamento-type";
import { catchError} from 'rxjs/operators';
import { ItemEstoque } from "./entrada-estoque/item-estoque";
import { TransacaoBaixa } from "./saida-estoque/item-baixa-estoque";

@Injectable()
export class FarmaciaApiService{

  
    constructor(private http: Http){}

    
    urlGetMedicamentos: string = "https://gefwebapi.azurewebsites.net/api/medicamento/";
    urlGetEstoque: string = "https://gefwebapi.azurewebsites.net/api/estoque/";
    urlGetTipoMedicamentos: string = "https://gefwebapi.azurewebsites.net/api/tipomedicamento/";
    urlGetViaAdministracao: string = "https://gefwebapi.azurewebsites.net/api/viaadministracao/";
    urlGetUnidadeMedida: string ="https://gefwebapi.azurewebsites.net/api/unidademedida/";

    ulrPostMedicamento: string = "https://gefwebapi.azurewebsites.net/api/Medicamento";
    urlPostItemEstoque: string= "https://gefwebapi.azurewebsites.net/api/Estoque";
    urlPostBaixaEstoque: string= "https://gefwebapi.azurewebsites.net/api/Transacao"

    urlGetMedicamentosFake: string= "http://www.mocky.io/v2/5c36235a3000008b0021b7e5";


    ///Retorna os medicamentos
    listarMedicamentos() : Observable<Response>{
      return this.http.get(this.urlGetMedicamentos);
      
    }

    listarMedicamentosFake() : Observable<Response>{
      return this.http.get(this.urlGetMedicamentosFake);
    }

    ///Retorna o estoque
    listarEstoque() : Observable<Response>{
      return this.http.get(this.urlGetEstoque);
    }

    ///Retorna os tipos de medicamentos
    listarTipoMedicamentos() : Observable<Response>{
      return this.http.get(this.urlGetTipoMedicamentos);
    }

    listarViaAdministracao() : Observable<Response>{
      return this.http.get(this.urlGetViaAdministracao);
    }

    listarUnidadesMedida() : Observable<Response>{
      return this.http.get(this.urlGetUnidadeMedida);
    }

    postJSONMedicamento(medicamento: MedicamentoCad) {
      
      var json = JSON.stringify(medicamento);
      var params = json;
      var headers = new Headers();

      console.log(json);
     
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.ulrPostMedicamento, params, {headers : headers});
      

    }

    putJSONMedicamento(medicamento: MedicamentoCad, id: number) {
      
      var json = JSON.stringify(medicamento);
      var params = json;
      var headers = new Headers();

      console.log(json);
     
      headers.append('Content-Type', 'application/json');
      return this.http.put(this.ulrPostMedicamento +"/"+id, params, {headers : headers});
      

    }

    postJSONItemEstoque(itemEstoque: ItemEstoque){
      var json = JSON.stringify(itemEstoque);
      var params = json;
      var headers = new Headers();

      console.log(json);

      headers.append('Content-Type', 'application/json');
      return this.http.post(this.urlPostItemEstoque, params, {headers : headers});

    }

    postJSONBaixaEstoque(itemBaixa : TransacaoBaixa){
      var json = JSON.stringify(itemBaixa);
      var params = json;
      var headers = new Headers();

      console.log(json);

      headers.append('Content-Type', 'application/json');
      return this.http.post(this.urlPostBaixaEstoque, params, {headers: headers});
    }
    
}