import { NgModule } from '@angular/core';
import { EntradaEstoqueRoutingModule } from './entrada-estoque-routing.module';
import { EntradaEstoqueComponent} from './entrada-estoque.component';

@NgModule({

    imports:[EntradaEstoqueRoutingModule],
    declarations:[EntradaEstoqueComponent],
    exports:[EntradaEstoqueComponent]
})

export class EntradaEstoqueModule{

}