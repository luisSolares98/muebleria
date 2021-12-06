import { Injectable } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MsjService {
  closeResult = '';

  constructor(private modalService: NgbModal) { }
  mensaje(estado: any, title: string, mensaje: string, btnStado: boolean = false, tiempo: number = 1500) {
    Swal.fire({
      title: title,
      text: mensaje,
      icon: estado,
      showConfirmButton: btnStado,
      timer: tiempo
    })
  }

  mensaje2(estado: any, title: string, mensaje: string, btnStado: boolean = false) {
    return Swal.fire({
      title: title,
      text: mensaje,
      icon: estado,
      allowOutsideClick: false,
      confirmButtonColor: "rgb(250, 140, 0)",
      showConfirmButton: btnStado
    });
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
