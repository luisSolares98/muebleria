export class Acabado {
    constructor(private _id: number, private _nombre: string, private _precio: number, private _estado: boolean) {
    
    }
    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }
    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(nombre: string) {
        this._nombre = nombre;
    }

    public get precio(): number {
        return this._precio;
    }

    public set precio(precio: number) {
        this._precio = precio;
    }
    public get estado(): boolean {
        return this._estado;
    }

    public set estado(estado: boolean) {
        this._estado = estado;
    }
}