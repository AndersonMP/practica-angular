import { Component } from '@angular/core';
import { Cuenta } from '../cuenta/cuenta';
import { Transacciones } from '../transacciones/transacciones';
import { Prestamos } from '../prestamos/prestamos';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'mi-perfil',
    imports: [Cuenta, Transacciones, Prestamos, CommonModule],
    templateUrl: './mi-perfil.html',
    styleUrl: './mi-perfil.css'
})

export class MiPerfil {

    public nombre: string;
    public edad: number;
    public ocupacion: string;
    public direccion: string;
    public telefono: string;
    public mostrarCuenta: boolean;
    public nombreCliente: string = "Juan Pérez";
    public mensajeRecibido: string = "";


    constructor() {
        this.nombre = "Juan Pérez";
        this.edad = 30;
        this.ocupacion = "Desarrollador de Software";
        this.direccion = "Av. Amazonas y Río Coca, Quito, Ecuador.";
        this.telefono = "+593 999 999 999";
        this.mostrarCuenta = true;

        // alert("¡Bienvenido al perfil, estás dentro de la apliación!");
        console.log("Se cargó el componente perfil correctamente.")
    }

    cambiarEdad() {
        this.edad += 1;
    }

    cambiarDireccion() {
        this.direccion = "Calle Fantasma y Avenida Siempre Viva";
    }

    ocultarComponenteCuenta() {
        this.mostrarCuenta = false;
    }

    mostrarComponenteCuenta() {
        this.mostrarCuenta = true;
    }

    recibirMensaje(mensaje: string){
        this.mensajeRecibido = mensaje;
    }

    ngDoCheck() {
        console.log("Componente actualizado.")
    }
}

