import { NgModule } from '@angular/core';
import { InicioRoutingModule} from './inicio-routing.module';
import { InicioComponent } from './inicio.component';

@NgModule({
imports: [
    InicioRoutingModule
],
declarations: [InicioComponent]
})

export class InicioModule {}