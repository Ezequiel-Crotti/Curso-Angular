import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";


@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegueta',
          poder: 7500
        }
    ]; 
    
    get personajes(): Personaje[]{
        return [...this._personajes];
    }
    constructor(){
        console.log("Servicio inicializado")
    }

    agregarPersonaje( personaje: Personaje){
        this._personajes.push(personaje);
    }
}