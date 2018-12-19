import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { InicioModule } from './inicio/inicio.module';
import { AppBootstrapModule } from './share/app-bootstrap.module';
import {CommonModule} from '@angular/common';
import { UtilityService } from 'src/service/utility.service';
import { EstoqueGeralComponent } from './farmacia/estoque-geral/estoque-geral.component';





@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    InicioModule,
    CommonModule,
    AppBootstrapModule
    
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
