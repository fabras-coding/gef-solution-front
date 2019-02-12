import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AlteracaoMedicamentoComponent} from '../alteracao-medicamento/alteracao-medicamento.component'

@NgModule({
    imports: [RouterModule.forChild([
        {
            path:'', component: AlteracaoMedicamentoComponent
        }
    ])]
})
export class AlteracaoMedicamentoRoutingModule {}
