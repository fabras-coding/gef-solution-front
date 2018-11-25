import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MedicamentoComponent } from "./medicamento.component";


@NgModule({

    imports: [RouterModule.forChild([
        {
            path: '', component: MedicamentoComponent   
        }
    ])]
    

})

export class MedicamentoRoutingModule{

}