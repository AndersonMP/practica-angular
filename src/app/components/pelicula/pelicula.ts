import { Component } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  imports: [],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.css',
})
export class Pelicula {

  constructor() {

  }

  ngOnInit() {
    console.log("El componente de película está arrancando.")
  }

  ngOnDestroy() {
    console.log("El componente de película ha sido eliminado.")
  }
}
