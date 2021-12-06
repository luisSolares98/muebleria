import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { CompraService } from '../../services/compra.service';
import { Router } from '@angular/router';
import { Mueble } from '../../models/Mueble';
import { MsjService } from '../../services/msj.service';
import { Acabado } from '../../models/Acabado';
import { Pintura } from '../../models/Pintura';
import { Barniz } from '../../models/Barniz';
import { Protectores } from '../../models/Protectores';
import { Tallado } from '../../models/Tallado';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  listCatalogo: Mueble[];
  compra: Mueble;
  listAcabados: Acabado[];

  /* Items | acabados */
  objPintura: Acabado;
  objBarniz: Acabado;
  objProtectores: Acabado;
  objTallado: Acabado;
  
  constructor(private _router: Router, private sConfig: ConfigService, private sCompra: CompraService, private sModal: MsjService) { 
    this.listCatalogo = [];
    this.compra = new Mueble();
    this.listAcabados = [];
    this.objBarniz = new Barniz();
    this.objPintura = new Pintura();
    this.objProtectores = new Protectores();
    this.objTallado = new Tallado();

  }
  
  ngOnInit(): void {
    this.list();
    console.info("entrando a dashbord");
  }
  open(content: any, item: Mueble) {
    this.compra = item;
    this.compra.acabado = [];
    this.compra.precioTotal = this.compra.precio;
    console.log(this.compra);
    this.compra.usuarioId = parseInt(this.sConfig.getCookie("usuarioId"));
    this.sModal.open(content);
  }
  list() {
    this.sCompra.getCatalogo().subscribe(resp=> {
      this.listCatalogo = resp.muebles;
    });
    this.sCompra.getAcabados().subscribe(resp => {
      this.listAcabados = resp.acabados;
    });
  }
  add(item: Acabado) {
    if (item.estado) {
      this.compra.acabado.push(item);
      this.compra.precioTotal += item.precio;
    } else {
      this.removeItems(item.id);
      this.compra.precioTotal -= item.precio;
    }
  }
  insert(modal: any ) {
    console.log(this.compra);
    this.sCompra.insert(this.compra).subscribe(resp => {
      console.log(resp);
      modal.close('Save click');
      alert('se compro con exito el mueble');
    }, error => {
      console.log(error)
    });
  }
  removeItems(itemId: number){ 
    const index = this.getPosicion(itemId);
    if (index == -1) {
        return false;
    }
    this.compra.acabado.splice(index, 1);
    return true;
  }
  getPosicion(itemId: number): number {
    for (let index = 0; index < this.compra.acabado.length; index++) {
        const element = this.compra.acabado[index];
        if (element.id == itemId) {
            return index;
        }
    }
    return -1;
  }
}
