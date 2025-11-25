import { Component } from '@angular/core';
import { Pelicula } from '../pelicula/pelicula';


@Component(
    {
        selector: 'mi-producto',
        imports: [Pelicula],
        templateUrl: './producto.html',
        styleUrl: './producto.css',
    }
)

export class Producto {

    public nombre: string;
    public marca: string;
    public precio: number;
    public descipcion: string;
    public mostrarPelicula: boolean = true;


    constructor() {
        this.nombre = "PC Portátil";
        this.marca = "Asus";
        this.precio = 457;
        this.descipcion = "Laptop enfocado en ofimática y programación.";
        console.log("Componente producto cargado correctamente");
    }

    cambiarNombre() {
        this.nombre = "Asus ROG Strix"
    }

    ocultarComponentePelicula() {
        this.mostrarPelicula = false;
    }

    mostrarComponentePelicula() {
        this.mostrarPelicula = true;
    }

    ngOnInit() {
        console.log("El componente está inicializado.")
    }

    ngDoCheck() {
        console.log("Componente actualizdo.")
    }

    ngAfterViewInit() {
        console.log("La vista está cargada.")
    }

}