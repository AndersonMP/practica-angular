import { Component } from '@angular/core';
import { CommonModule} from "@angular/common";

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  web= "https://mercadolibre.com";
  redirigir = false;

  cambiarRedirigir(){
    this.redirigir = !this.redirigir;
  }
}
