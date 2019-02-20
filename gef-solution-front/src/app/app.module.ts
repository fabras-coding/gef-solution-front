import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { InicioModule } from './inicio/inicio.module';
import { AppBootstrapModule } from './share/app-bootstrap.module';
import {CommonModule} from '@angular/common';
import { UtilityService } from 'src/service/utility.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
