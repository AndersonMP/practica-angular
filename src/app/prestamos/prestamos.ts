import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

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
  imports: [CommonModule],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})

export class Prestamos {
  web = "https://mercadolibre.com";
  TipoPrestamo = TipoPrestamo;
  redirigir = false;

  prestamosList = [
    { id: 1, monto: 400, estado: 'Aprobado' },
    { id: 2, monto: 1500, estado: 'Pendiente' },
    { id: 3, monto: 3000, estado: 'Aprobado' },
    { id: 4, monto: 750, estado: 'Pendiente' },
    { id: 5, monto: 4000, estado: 'Aprobado' },
    { id: 6, monto: 800, estado: 'Pendiente' },

  ]

  prestamo: Prestamo = {
    id: 1,
    tipo: TipoPrestamo.Vehicular,
    interes: 12.5
  }

  cambiarRedirigir() {
    this.redirigir = !this.redirigir;
  }
}

