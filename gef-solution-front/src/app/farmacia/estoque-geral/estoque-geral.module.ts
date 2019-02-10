import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueGeralRoutingModule } from './estoque-geral-routing.module';
import { EstoqueGeralComponent } from './estoque-geral.component';
import { FarmaciaApiService } from '../farmacia.service';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [EstoqueGeralComponent],
    imports: [ EstoqueGeralRoutingModule, CommonModule, FormsModule, NgxPaginationModule ],
    exports: [EstoqueGeralComponent],
    providers: [FarmaciaApiService],
})
export class EstoqueGeralModule {}