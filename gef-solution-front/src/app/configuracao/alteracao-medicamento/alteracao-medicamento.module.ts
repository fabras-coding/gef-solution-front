import { NgModule } from "@angular/core";
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AlteracaoMedicamentoComponent } from "./alteracao-medicamento.component";
import { FarmaciaApiService } from "src/app/farmacia/farmacia.service";
import { AlteracaoMedicamentoRoutingModule } from "./alteracao-medicamento-routing.module";


@NgModule({
imports:[ AlteracaoMedicamentoRoutingModule , CommonModule, FormsModule, RouterModule, TextInputAutocompleteModule],
declarations:[AlteracaoMedicamentoComponent],
exports:[AlteracaoMedicamentoComponent],
providers:[FarmaciaApiService]
})

export class AlteracaoMedicamentoModule{

}