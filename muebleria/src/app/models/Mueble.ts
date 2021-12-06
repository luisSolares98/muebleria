import { Acabado } from './Acabado';
export class Mueble {
    
    constructor(private _id?: number, private _nombre?: string, private _fecha?: Date, private _precio?: number, private _precioTotal?: number,private _acabados: Acabado[] = [], private _usuarioId: number = 0) {
    }
    public get id(): number {
        return this._id || 0;
    }

    public set id(id: number) {
        this._id = id;
    }
    public get precio(): number {
        return this._id || 0;
    }

    public set precio(precio: number) {
        this._precio = precio;
    }
    public get precioTotal(): number {
        return this._precioTotal || 0;
    }

    public set precioTotal(precioTotal: number) {
        this._precioTotal = precioTotal;
    }
    public get usuarioId(): number {
        return this._usuarioId || 0;
    }

    public set usuarioId(id: number) {
        this._usuarioId = id;
    }
    public get nombre(): string {
        return this._nombre || '';
    }

    public set nombre(nombre: string) {
        this.nombre = nombre;
    }

    public get fecha(): Date {
        return this._fecha || new Date();
    }

    public set fecha(fecha: Date) {
        this._fecha = fecha;
    }
    public get acabado(): Acabado[] {
        return this._acabados || [];
    }
    public set acabado(item: Acabado[]) {
        this._acabados = item;
    }
}