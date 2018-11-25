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
    }



])],
exports: [RouterModule]

})

export class AppRoutingModule
{

}