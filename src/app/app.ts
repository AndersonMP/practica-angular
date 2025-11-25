import { Component, signal } from '@angular/core';
import { config } from './models/config';
// import { MiPerfil } from './components/mi-perfil/mi-perfil';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
// import { Prestamos } from './components/prestamos/prestamos';
// import { Padre } from './components/padre/padre';

@Component({
  selector: 'app-root',
  // imports: [Producto, MiPerfil, Usuario, Prestamos, Cine],
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular.');
  titulo = config.title;
  descripcion = config.description;
}
