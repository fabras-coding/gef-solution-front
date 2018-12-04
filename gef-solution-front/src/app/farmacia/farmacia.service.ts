import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { catchError} from 'rxjs/operators';

@Injectable()
export class FarmaciaApiService{

    constructor(private http: Http){}

    urlGet :string = "http://www.mocky.io/v2/5c05bbad3300000e27e8133b";
    
    listarMedicamentos(): Observable<Response>{
        return this.http.get(this.urlGet)
        .pipe(
          catchError(this.handleError('listarMedicamentos',null))  
        );
    }

    
    
    private handleError (operation = 'operation', result?: "") {
    return (error: any): Observable<Response> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      
   
      // Let the app keep running by returning an empty result.
      return null; ;
    };
  }

}