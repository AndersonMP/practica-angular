import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { Ventas } from '../ventas/ventas';
import { cambiaLetras } from '../pipes/cambiaLetras';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    Ventas,
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    TitleCasePipe,
    CurrencyPipe,
    DecimalPipe,
    cambiaLetras,
  ],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  
  web = "https://amazon.com";
  redirigir = false;
  
  marcasAutos = [
    {id: 1, nombre: 'Toyota'},
    {id: 2, nombre: 'Kia'},
    {id: 3, nombre: 'Chevrolet'},
    {id: 4, nombre: 'Mazda'},
    {id: 5, nombre: 'Nissan'},
  ];

  usuario = {
    id: 1,
    nombre: "José",
    nick: "jose123",
    rol: "admin",
  }

  hoy = new Date(); 
  precio = 2549.99;
  valorDecimal = 3.141592; 

  ngOnInit(){
    this.marcasAutos = [];
  }

  cambiarRedireccion(){
    this.redirigir = !this.redirigir; 
  }
}
