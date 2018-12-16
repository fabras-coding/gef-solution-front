import { NgModule } from "@angular/core";
import { MedicamentoRoutingModule } from "./medicamento-routing.module";
import { MedicamentoComponent } from "./medicamento.component";
import { FarmaciaApiService } from "../farmacia.service";
import { CommonModule } from "@angular/common";


@NgModule({
    imports:[MedicamentoRoutingModule, CommonModule],
    declarations: [MedicamentoComponent],
    exports:[MedicamentoComponent],
    providers: [FarmaciaApiService]
})

export class MedicamentoModule{
    
}