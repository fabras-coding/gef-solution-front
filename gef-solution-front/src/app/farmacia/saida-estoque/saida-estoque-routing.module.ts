import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SaidaEstoqueComponent } from "./saida-estoque.component";

@NgModule({

    imports : [RouterModule.forChild([
        {
            path: '', component: SaidaEstoqueComponent
        }
    ])]
})

export class SaidaEstoqueRoutingModule{

}
