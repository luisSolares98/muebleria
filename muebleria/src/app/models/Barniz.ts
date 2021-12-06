import { Acabado } from './Acabado';
export class Barniz extends Acabado{
    constructor (id: number = 0, nombre: string = "",  precio: number = 0, estado: boolean = false) {
        super(id, nombre, precio, estado);
    }
}
