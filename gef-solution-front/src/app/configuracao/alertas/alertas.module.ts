import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertasComponent } from './alertas.component';
import { FarmaciaApiService } from 'src/app/farmacia/farmacia.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertasRoutingModule } from './alertas-routing.module';

@NgModule({
    imports: [AlertasRoutingModule, CommonModule, FormsModule,RouterModule ],
    declarations: [AlertasComponent],
    exports: [AlertasComponent],
    providers: [FarmaciaApiService],
})
export class AlertasModule {}