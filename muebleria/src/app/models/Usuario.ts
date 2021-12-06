import { Acabado } from './Acabado';
import { Mueble } from './Mueble';
export class Usuario {
    
    constructor(private _id:number = 0, private _email: string = "",  private _nombreCompleto: string = "", private _password: string = "", private _listMuebles: Mueble[] = []) {
    }

    public get id():number {
        return this._id;
    }
    public set id(id: number){
        this._id = id;
    }
    public get email(): string {
        return this._email;
    }
    public set email(email: string) {
        this._email = email;
    }
    public get nombreCompleto(): string {
        return this._nombreCompleto;
    }
    public set nombreCompleto(nombre: string) {
        this._nombreCompleto = nombre;
    }
    public get password(): string {
        return this._password;
    }
    public set password(password: string) {
        this._password = password;
    }
    public get listMuebles(): Mueble[] {
        return this._listMuebles;
    }
    public set listMuebles(listMuebles: Mueble[]) {
        this._listMuebles = listMuebles;
    }
    public acabadoAdd(item: Mueble) {
        this._listMuebles.push(item);
    }
}