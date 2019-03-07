import { Component, OnInit, TemplateRef } from '@angular/core';
import { UtilityService } from 'src/service/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  constructor(private util: UtilityService,  private router: Router) { }

  ngOnInit() {
  }

  
  openModal(template: TemplateRef<any>) {
    this.util.openModal(template);
  }

  closeModal() {
    this.util.closeModal();
  }

  
  redirecionaMedicamento() {
    this.closeModal();
    this.router.navigate(['inicio']);
  }


}
