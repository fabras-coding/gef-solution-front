import { NgModule } from "@angular/core";
import { MedicamentoRoutingModule } from "./medicamento-routing.module";
import { MedicamentoComponent } from "./medicamento.component";
import { FarmaciaApiService } from "../farmacia.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";


@NgModule({
    imports:[MedicamentoRoutingModule, CommonModule, FormsModule, RouterModule],
    declarations: [MedicamentoComponent],
    exports:[MedicamentoComponent],
    providers: [FarmaciaApiService]
})

export class MedicamentoModule{
    
}