import { Component, signal } from '@angular/core';
import { config } from './models/config';
import { Cuenta } from './components/cuenta/cuenta';


@Component({
  selector: 'app-root',
  // imports: [Producto, MiPerfil, Usuario, Prestamos, Cine],
  imports: [Cuenta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular.');
  titulo = config.title;
  descripcion = config.description;
}
