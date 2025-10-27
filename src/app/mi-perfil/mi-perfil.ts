import {Component} from '@angular/core';

@Component({
    selector: 'mi-perfil',
    templateUrl: './mi-perfil.html',
    styleUrl: './mi-perfil.css'
})

export class MiPerfil {
    constructor(){
        alert("¡Bienvenido al perfil, estás dentro de la apliación!");
        console.log("Se cargó el componente perfil correctamente.")
    }
}