
import { Usuario } from "../Usuario";
import { Mueble } from '../Mueble';
import { Acabado } from '../Acabado';


export interface RespuestaTop {
    status: number;
    mensaje: string;
    usuario: Usuario;
    muebles: Mueble[];
    mueble: Mueble;
    acabados: Acabado[];
    usuarioId: number;
}