import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers :[]
})
export class InicioComponent implements OnInit {

  
  usuario: string ="Fulaninho da Silva";
  notificacoes: number = 2;
  today = new Date();
  jstoday = '';
  
 constructor(){
  this.jstoday = formatDate(this.today, 'dd-MM-yyyy', 'en-US')  ;
 }

  ngOnInit() {
     
  }


  

}
