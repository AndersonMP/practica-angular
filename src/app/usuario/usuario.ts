import { Component } from '@angular/core';
import { Ventas } from '../ventas/ventas';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [Ventas],
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

  usuario = {
    id: 1,
    nombre: "José",
    nick: "jose123",
    rol: "admin",
  }

  ngOnInit(){
    this.marcasAutos = [];
  }

  cambiarRedireccion(){
    this.redirigir = !this.redirigir; 
  }
}
