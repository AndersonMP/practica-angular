import { Component } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { Transacciones } from '../transacciones/transacciones';

@Component({
  selector: 'app-cuenta',
  imports: [Transacciones],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {

  public cliente: Cliente;

  constructor() {
    this.cliente = new Cliente(1, "Juan", "Méndez", "juan@email.com", 2500);
  }

  ngOnInit(){
    console.log("El componente cuenta está arrancando.")
  }

  ngOnDestroy(){
    console.log("El componente de cuenta ha sido eliminado.")
  }
}

