import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueGeralRoutingModule } from './estoque-geral-routing.module';
import { EstoqueGeralComponent } from './estoque-geral.component';
import { FarmaciaApiService } from '../farmacia.service';

@NgModule({
    declarations: [EstoqueGeralComponent],
    imports: [ EstoqueGeralRoutingModule, CommonModule ],
    exports: [EstoqueGeralComponent],
    providers: [FarmaciaApiService],
})
export class EstoqueGeralModule {}