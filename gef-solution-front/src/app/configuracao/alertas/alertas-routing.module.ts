import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {AlertasComponent} from '../alertas/alertas.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path:'', component: AlertasComponent
        }
    ])]
    
})
export class AlertasRoutingModule {}
