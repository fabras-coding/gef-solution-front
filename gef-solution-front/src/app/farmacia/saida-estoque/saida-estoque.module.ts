import { NgModule } from "@angular/core";
import { FarmaciaApiService } from "../farmacia.service";
import { SaidaEstoqueComponent } from "./saida-estoque.component";
import { SaidaEstoqueRoutingModule } from "./saida-estoque-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TextInputAutocompleteModule } from "angular-text-input-autocomplete";

@NgModule({

    imports:[SaidaEstoqueRoutingModule, CommonModule, FormsModule,RouterModule, TextInputAutocompleteModule],
    declarations:[SaidaEstoqueComponent],
    exports:[SaidaEstoqueComponent],
    providers:[FarmaciaApiService]
})

export class SaidaEstoqueModule{

}