import { Component } from '@angular/core';
import { Pelicula } from '../pelicula/pelicula';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ventas',
  imports: [Pelicula, NgClass],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css',
})
export class Ventas {
  public colorear:boolean = false;
  public mostrar:string = 'sí';

}
