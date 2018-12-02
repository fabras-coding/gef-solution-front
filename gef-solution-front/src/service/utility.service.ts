import { Injectable, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Injectable()
export class UtilityService{ 

public modalRef: BsModalRef; // {1}
constructor(private modalService: BsModalService) {} // {2}

public openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template); // {3}
  
}

public closeModal(){
     this.modalService.hide(1);
}

}