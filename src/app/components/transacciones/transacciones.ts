import { Component, EventEmitter, Output } from '@angular/core';
import { Transaccion } from '../../models/Transaccion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transacciones',
  imports: [CommonModule, FormsModule],
  templateUrl: './transacciones.html',
  styleUrl: './transacciones.css',
})
export class Transacciones {
  public transacciones: Array<Transaccion>;
  public descripcionTransaccion: string = "";
  @Output() mensajeEnviado: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.transacciones = [
      new Transaccion(1, new Date('2024-01-15'), 'Depósito', 55, 'ingreso'),
      new Transaccion(2, new Date('2024-01-16'), 'Retiro', 100, 'egreso'),
      new Transaccion(3, new Date('2024-01-16'), 'Depósito', 28, 'ingreso'),
      new Transaccion(4, new Date('2024-01-17'), 'Retiro', 75, 'egreso'),
      new Transaccion(5, new Date('2024-01-17'), 'Depósito', 150, 'ingreso'),
      new Transaccion(6, new Date('2024-01-17'), 'Retiro', 21, 'egreso'),
    ]
  }

  showTransaction() {
    console.log("Transacción:", this.descripcionTransaccion);
  }

  enviarSaludo(){
    this.mensajeEnviado.emit("¡Hola desde el componente de transacciones!");
  }

  ngDoCheck() {
    console.log(this.descripcionTransaccion);
  }

}

