import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EstoqueGeralComponent } from './estoque-geral.component';

const routes: Routes = [
    { path: '', component: EstoqueGeralComponent }
];

@NgModule({
    
    imports: [CommonModule, RouterModule.forChild(routes)]
    
})
export class EstoqueGeralRoutingModule {}
