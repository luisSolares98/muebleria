import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config.service';
import { CompraService } from '../../services/compra.service';
import { Mueble } from '../../models/Mueble';
import { MsjService } from '../../services/msj.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  listCompra: Mueble[];
  compra: Mueble;
  listAcabados: Mueble[];
  constructor(private _router: Router, private sConfig: ConfigService, private sCompra: CompraService, private sModal: MsjService) { 
    this.listCompra = [];
    this.compra = new Mueble();
    this.listAcabados = [];
  }
  
  ngOnInit(): void {
    this.list();
    console.info("entrando a dashbord");
  }
  open(content: any, item: Mueble) {
    this.compra = item;
    this.sCompra.getAcabadosCompraId(this.compra.id).subscribe(resp => {
      console.log(resp);
      this.listAcabados = resp.muebles;
    });
    this.sModal.open(content);
  }
  list() {
    this.sCompra.getComprasAll_UsuarioId(parseInt(this.sConfig.getCookie("usuarioId"))).subscribe(resp=> {
      console.info("opteniendo los diseños creados por el usuario");
      console.log(resp);
      this.listCompra = resp.muebles;
    });
  }
}
