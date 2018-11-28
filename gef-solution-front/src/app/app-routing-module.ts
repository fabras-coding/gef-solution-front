import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({


     //carregando rotas com LazyLoading
     
imports:[ RouterModule.forRoot([

    {path: 'inicio',
     loadChildren: '../app/inicio/inicio.module#InicioModule'
    },
    {
        path: 'novo-medicamento',
        loadChildren: '../app/farmacia/medicamento/medicamento.module#MedicamentoModule'
    },
    {
        path: 'entrada-estoque',
        loadChildren: '../app/farmacia/entrada-estoque/entrada-estoque.module#EntradaEstoqueModule'
    }



])],
exports: [RouterModule]

})

export class AppRoutingModule
{

}