import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { catchError} from 'rxjs/operators';

@Injectable()
export class FarmaciaApiService{

    constructor(private http: Http){}

    urlGet :string = "http://www.mocky.io/v2/5c05bbad3300000e27e8133b";
    
    urlGetMedicamentos: string = "https://gefwebapi.azurewebsites.net/api/medicamento/";
    urlGetEstoque: string = "https://gefwebapi.azurewebsites.net/api/estoque/";

    //urlGetMedicamentos: string = "http://www.mocky.io/v2/5c183cee2f00005700af0ee9";
    //    urlGetEstoque: string = "http://www.mocky.io/v2/5c198549320000540064acae";
    
    

    testeApi(): Observable<Response>{
        return this.http.get(this.urlGet)
        
    }

    ///Retorna os medicamentos
    listarMedicamentos() : Observable<Response>{
      return this.http.get(this.urlGetMedicamentos)
      
    }

    ///Retorna o estoque
    listarEstoque() : Observable<Response>{
      return this.http.get(this.urlGetEstoque)
    }

    
    
}