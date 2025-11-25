import { Component } from '@angular/core';
import { Pelicula } from '../../models/Pelicula';

@Component({
  selector: 'app-cine',
  imports: [],
  templateUrl: './cine.html',
  styleUrl: './cine.css',
})
export class Cine {
  public titulo: string;
  public peliculas: Array<Pelicula>;

  constructor() {
    this.titulo = "Modelos";
    this.peliculas = [
      new Pelicula(1, "Toy Story", "Animación", "John Lasseter", 1995, "Disney+", true),
      new Pelicula(2, "El Rey León", "Animación", "Roger Allers y Rob Minkoff", 1994, "Disney+", true),
      new Pelicula(3, "Matrix", "Ciencia ficción", "Lana y Lilly Wachowski", 1999, "HBO Max", true),
      new Pelicula(4, "El Señor de los Anillos: La Comunidad del Anillo", "Fantasía", "Peter Jackson", 2001, "Prime Video", true),
      new Pelicula(5, "Inception", "Ciencia ficción", "Christopher Nolan", 2010, "Netflix", true),
      new Pelicula(6, "Forrest Gump", "Drama", "Robert Zemeckis", 1994, "Paramount+", true),
      new Pelicula(7, "Gladiator", "Acción / Histórico", "Ridley Scott", 2000, "Netflix", true),
      new Pelicula(8, "Piratas del Caribe: La maldición del Perla Negra", "Aventura", "Gore Verbinski", 2003, "Disney+", true),
      new Pelicula(9, "Avengers: Endgame", "Superhéroes", "Anthony y Joe Russo", 2019, "Disney+", true),
      new Pelicula(10, "Interstellar", "Ciencia ficción", "Christopher Nolan", 2014, "HBO Max", true)
    ];
  }

  ngOnInit() {
    console.log(this.peliculas)
    this.peliculas[1].titulo = "El Rey León (Remake)"
  }

}
