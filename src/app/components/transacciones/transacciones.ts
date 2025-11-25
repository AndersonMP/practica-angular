import { Component } from '@angular/core';
import { Transaccion } from '../../models/Transaccion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transacciones',
  imports: [CommonModule],
  templateUrl: './transacciones.html',
  styleUrl: './transacciones.css',
})
export class Transacciones {
  public transacciones: Array<Transaccion>;

  constructor(){
    this.transacciones = [
      new Transaccion(1, new Date('2024-01-15'), 'Depósito', 55, 'ingreso'),
      new Transaccion(1, new Date('2024-01-16'), 'Retiro', 100, 'egreso'),
      new Transaccion(1, new Date('2024-01-16'), 'Depósito', 28, 'ingreso'),
      new Transaccion(1, new Date('2024-01-17'), 'Retiro', 75, 'egreso'),
      new Transaccion(1, new Date('2024-01-17'), 'Depósito', 150, 'ingreso'),
      new Transaccion(1, new Date('2024-01-17'), 'Retiro', 21, 'egreso'),
    ]
  }
}

