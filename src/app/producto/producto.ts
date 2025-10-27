import { Component } from '@angular/core';

@Component(
    {
        selector: 'mi-producto',
        templateUrl: './producto.html',
        styleUrl: './producto.css',
    }
)

export class Producto {
    constructor(){
        console.log("Componente producto cargado correctamente");
        alert("Hola")
    }
}