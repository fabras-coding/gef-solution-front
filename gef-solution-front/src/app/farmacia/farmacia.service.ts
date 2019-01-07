import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { MedicamentoCad } from "../farmacia/medicamento/medicamento-type";
import { catchError} from 'rxjs/operators';

@Injectable()
export class FarmaciaApiService{

  
    constructor(private http: Http){}

    
    urlGetMedicamentos: string = "https://gefwebapi.azurewebsites.net/api/medicamento/";
    urlGetEstoque: string = "https://gefwebapi.azurewebsites.net/api/estoque/";
    urlGetTipoMedicamentos: string = "https://gefwebapi.azurewebsites.net/api/tipomedicamento/";
    urlGetViaAdministracao: string = "https://gefwebapi.azurewebsites.net/api/viaadministracao/";
    urlGetUnidadeMedida: string ="https://gefwebapi.azurewebsites.net/api/unidademedida/";

    ulrPostMedicamento: string = "https://gefwebapi.azurewebsites.net/api/Medicamento";
    
    


    ///Retorna os medicamentos
    listarMedicamentos() : Observable<Response>{
      return this.http.get(this.urlGetMedicamentos);
      
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

    postJSONMedicamento(medicamento: MedicamentoCad){
      
      var json = JSON.stringify(medicamento);
      var params = json;
      var headers = new Headers();

      alert(json);
      console.log(json);
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.ulrPostMedicamento, params, {headers : headers});
      

    }

    
}