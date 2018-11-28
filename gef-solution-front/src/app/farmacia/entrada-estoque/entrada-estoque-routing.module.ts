import { NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';
import { EntradaEstoqueComponent } from './entrada-estoque.component';

@NgModule({

    imports : [RouterModule.forChild([

        {
            path: '', component: EntradaEstoqueComponent
        }
    ])]
})

export class EntradaEstoqueRoutingModule{

}
