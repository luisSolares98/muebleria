import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../models/Usuario';
import { RespuestaTop } from '../models/interfaces/Respuesta';
import { Mueble } from '../models/Mueble';

@Injectable({
    providedIn: 'root'
})
export class CompraService {
    urlApi = environment.urlApi;
    constructor(private http: HttpClient, private sConfig: ConfigService) { }

    getCatalogo() {
        const headers = this.sConfig.getHeaders();
        return this.http.get<RespuestaTop>(this.urlApi + "catalogo", { headers });
    }
    getComprasAll_UsuarioId(usuarioId: number) {
        const headers = this.sConfig.getHeaders();
        return this.http.get<RespuestaTop>(this.urlApi + "compraAllusuarioId/" + usuarioId, { headers });
    }
    getAcabadosCompraId(compraId: number) {
        const headers = this.sConfig.getHeaders();
        return this.http.get<RespuestaTop>(this.urlApi + "compraAllAcabados/" + compraId, { headers });
    }
    getAcabados() {
        const headers = this.sConfig.getHeaders();
        return this.http.get<RespuestaTop>(this.urlApi + "acabados", { headers });
    }
    insert(compra: Mueble) {
        const headers = this.sConfig.getHeaders();
        const params = JSON.stringify(compra);
        return this.http.post<RespuestaTop>(this.urlApi + "compra", params, { headers });
    }
}