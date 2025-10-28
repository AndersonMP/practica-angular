import { Component } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {
  ngOnInit(){
    console.log("El componente cuenta está arrancando.")
  }

  ngOnDestroy(){
    console.log("El componente de cuenta ha sido eliminado.")
  }
}
