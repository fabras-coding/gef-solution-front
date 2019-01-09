import { NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';
import { EntradaEstoqueComponent } from './entrada-estoque.component';

@NgModule({

    imports : [RouterModule.forChild([

        {
            path: '', component: EntradaEstoqueComponent
        },
        {
            path: ':id', component: EntradaEstoqueComponent
        }
    ])]
})

export class EntradaEstoqueRoutingModule{

}
