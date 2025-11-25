import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  nombreHijo: string = 'Componente Hijo';
  @Input() elNombreDeMiPadre: string = '';
  @Output() saludoHijo = new EventEmitter<string>();

  enviarSaludo(){
    this.saludoHijo.emit(`Hola como estas padre? Soy tu hijo ${this.nombreHijo}`);  
  }

  // ngOnInit() {
  //   this.saludoHijo.emit(`Hola como estas padre? Soy tu hijo ${this.nombreHijo}`);
  // }
}
