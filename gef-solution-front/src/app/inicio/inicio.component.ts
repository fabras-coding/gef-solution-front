import { Component, OnInit } from '@angular/core';
import { DateFormatPipe} from './../share/date-pipes';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers :[DatePipe]
})
export class InicioComponent implements OnInit {

  
  usuario: string ="Fulaninho da Silva";
  notificacoes: number = 2;
  dataCorrente: number = Date.now();
    
  //nao consegui exibir a data
  constructor(private datePipe: DatePipe) { }


  ngOnInit() {
     
  }


  

}
