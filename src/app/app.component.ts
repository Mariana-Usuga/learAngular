import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnAngular';
  usuario = 'name from app'

  //se ejecuta cuando en el hijo (saludo compotente) se pulse un boton 
  //viene en el hijo pero se ejecuta en el padre
  receiveMessage(event: string){
    alert(event)
  }
}
