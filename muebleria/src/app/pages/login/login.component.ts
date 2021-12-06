import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/Usuario';
import { ConfigService } from '../../services/config.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  objUser: Usuario;

  constructor(private sConfig: ConfigService, private sUsuario: UsuarioService, private _router: Router) {
    this.objUser = new Usuario();
  }

  ngOnInit() {
    this.sConfig.setCookie("");
    console.info("ingresando a login");
  }
  onSubmit() {
    if ( !this.sUsuario.validatorEmail(this.objUser.email) ) {
      alert("introduzca un email valido");
      return;
    }
    this.sUsuario.isLogin(this.objUser).subscribe(resp => {
      if (resp.status == 200 && resp.usuario) {
        console.info("usuario logeado exitosamente");
        console.info(resp.usuario);
        this.sConfig.setCookie(resp.usuario.id + "");
        this._router.navigate(["index"]);
        return;
      } else {
        console.log("no existe usuario!");
      }
    });
  }

}
