import { Component, signal } from '@angular/core';
import { Prestamos } from './prestamos/prestamos';
// import { Producto } from "./producto/producto";
// import {MiPerfil} from './mi-perfil/mi-perfil';
// import { Usuario } from './usuario/usuario';


@Component({
  selector: 'app-root',
  // imports: [Producto, MiPerfil, Usuario, Prestamos],
  imports: [Prestamos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular.');
}
