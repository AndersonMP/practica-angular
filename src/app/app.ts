import { Component, signal } from '@angular/core';
import { Producto } from "./producto/producto";
import {MiPerfil} from './mi-perfil/mi-perfil';

@Component({
  selector: 'app-root',
  imports: [Producto, MiPerfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular.');
}
