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

  cambiarRedireccion(){
    this.redirigir = !this.redirigir; 
  }
}
