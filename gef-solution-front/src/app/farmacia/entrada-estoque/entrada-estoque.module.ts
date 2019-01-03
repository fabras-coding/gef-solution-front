import { NgModule } from '@angular/core';

import { EntradaEstoqueRoutingModule } from './entrada-estoque-routing.module';
import { EntradaEstoqueComponent} from './entrada-estoque.component';
import { FarmaciaApiService } from '../farmacia.service';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({

    imports:[EntradaEstoqueRoutingModule, CommonModule, FormsModule, RouterModule],
    declarations:[EntradaEstoqueComponent],
    exports:[EntradaEstoqueComponent],
    providers:[FarmaciaApiService]
})

export class EntradaEstoqueModule{

}