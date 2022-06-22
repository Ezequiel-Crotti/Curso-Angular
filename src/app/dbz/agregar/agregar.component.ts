import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  //esto sirve para enviar datos del hijo al padre
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  @Input() nuevo: Personaje ={
    nombre: '',
    poder: 0
  }
  //en el parametro del constructor defino el atributo "dbzService" e inyecta el servicio al mismo tiempo
  constructor( private dbzService: DbzService){

  }
 agregar(){
  if( this.nuevo.nombre.trim().length === 0){
    return;
  }
  console.log(this.nuevo);
  //aca se hace el envio del dato que necesito al ejecutarse el metodo agregar()
  //this.onNuevoPersonaje.emit(this.nuevo);
  //---------
  // Una vez inyectado el servicio en el constructor puedo usar sus metodos
  this.dbzService.agregarPersonaje( this.nuevo);
  this.nuevo = { nombre: '', poder:0}

 }

}
