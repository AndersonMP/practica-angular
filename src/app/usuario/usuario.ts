import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  web = "https://amazon.com";
  redirigir = false;
  marcasAutos = [
    {id: 1, nombre: 'Toyota'},
    {id: 2, nombre: 'Kia'},
    {id: 3, nombre: 'Chevrolte'},
    {id: 4, nombre: 'Mazda'},
    {id: 5, nombre: 'Nissan'},
  ];

  ngOnInit(){
    this.marcasAutos = [];
  }

  cambiarRedireccion(){
    this.redirigir = !this.redirigir; 
  }
}
