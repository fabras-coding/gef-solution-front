import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({


    //carregando rotas com LazyLoading

    imports: [RouterModule.forRoot([

        {
            path: 'inicio',
            loadChildren: '../app/inicio/inicio.module#InicioModule'
        },
        {
            path: 'novo-medicamento',
            loadChildren: '../app/farmacia/medicamento/medicamento.module#MedicamentoModule'
        },
        {
            path: 'entrada-estoque',
            loadChildren: '../app/farmacia/entrada-estoque/entrada-estoque.module#EntradaEstoqueModule'
        },

        {
            path: 'estoque-geral',
            loadChildren: '../app/farmacia/estoque-geral/estoque-geral.module#EstoqueGeralModule'
        },

        {
            path: 'baixa-estoque',
            loadChildren: '../app/farmacia/saida-estoque/saida-estoque.module#SaidaEstoqueModule'
        },

        {
            path: 'alteracao-medicamento',
            loadChildren: '../app/configuracao/alteracao-medicamento/alteracao-medicamento.module#AlteracaoMedicamentoModule'
        },

        {
            path: 'configuracao-aviso',
            loadChildren: '../app/configuracao/alertas/alertas.module#AlertasModule'
        }




    ])],
    exports: [RouterModule]

})

export class AppRoutingModule {

}