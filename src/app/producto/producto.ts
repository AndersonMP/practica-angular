import { Component } from '@angular/core';
import {Pelicula} from '../pelicula/pelicula';
import { Usuario } from '../usuario/usuario';
import {Ventas} from '../ventas/ventas'

@Component(
    {
        selector: 'mi-producto',
        imports: [Pelicula, Usuario, Ventas],
        templateUrl: './producto.html',
        styleUrl: './producto.css',
    }
)

export class Producto {

    public nombre: string;
    public marca: string;
    public precio: number;
    public descipcion: string;

    constructor(){
        this.nombre = "PC Portátil";
        this.marca = "Asus";
        this.precio = 457;
        this.descipcion = "Laptop enfocado en ofimática y programación."
        console.log("Componente producto cargado correctamente");
    }
}