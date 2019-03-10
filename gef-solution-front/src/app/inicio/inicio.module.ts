import { NgModule } from '@angular/core';
import { InicioRoutingModule} from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FarmaciaApiService } from '../farmacia/farmacia.service';

@NgModule({
imports: [
    InicioRoutingModule, CommonModule, FormsModule,RouterModule],

declarations: [InicioComponent],
providers:[FarmaciaApiService]

})

export class InicioModule {}