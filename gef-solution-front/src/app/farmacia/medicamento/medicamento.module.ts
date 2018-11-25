import { NgModule } from "@angular/core";
import { MedicamentoRoutingModule } from "./medicamento-routing.module";
import { MedicamentoComponent } from "./medicamento.component";


@NgModule({
    imports:[MedicamentoRoutingModule],
    declarations: [MedicamentoComponent],
    exports:[MedicamentoComponent]
})

export class MedicamentoModule{
    
}