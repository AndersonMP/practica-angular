import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, PercentPipe, DatePipe, UpperCasePipe, TitleCasePipe } from "@angular/common";

enum TipoPrestamo {
  Personal = 'Personal',
  Hipotecario = 'Hipotecario',
  Vehicular = 'Vehicular'
}

interface Prestamo {
  id: number;
  tipo: TipoPrestamo;
  interes: number;
}

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, PercentPipe, DatePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  web = "https://mercadolibre.com";
  TipoPrestamo = TipoPrestamo;
  redirigir = false;

  prestamosList = [
    { id: 1, monto: 400, estado: 'Aprobado', fecha: new Date(2025, 0, 12) },
    { id: 2, monto: 1500, estado: 'Pendiente', fecha: new Date(2025, 2, 5) },
    { id: 3, monto: 3000, estado: 'Aprobado', fecha: new Date(2025, 4, 25) },
    { id: 4, monto: 750, estado: 'Pendiente', fecha: new Date(2025, 6, 14) },
    { id: 5, monto: 4000, estado: 'Aprobado', fecha: new Date(2025, 8, 30) },
    { id: 6, monto: 800, estado: 'Pendiente', fecha: new Date(2025, 10, 3) },
  ];

  prestamo: Prestamo = {
    id: 1,
    tipo: TipoPrestamo.Vehicular,
    interes: 0.125,
  };

  cambiarRedirigir() {
    this.redirigir = !this.redirigir;
  }
}
