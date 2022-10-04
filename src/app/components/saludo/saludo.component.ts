import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() name: string = 'Anonimo';
  @Output() messageEmitter: EventEmitter<string> = new EventEmitter<string>();

  myStyle: object = {
    color: 'red',
    fontSize: '20px',
    fontWeight: 'bold'
  }

  constructor() { }

  ngOnInit(): void {
    // intrucciones previas a la renderizacion del componente
    console.log('ngOnInit del cmp saludo')
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges recibe cambios', changes)
    console.log('valor nuevo', changes['name'].currentValue)

  }
  
  ngOnDestroy(): void {
    console.log('onDEstroy desaparecer')
  }
//Gestionar un evento de tipo click en el DOM y enviar un text al comp padre
  alertGreetings(): void {
    alert(`Hola ${this.name}`)
  }

  sendMessageToFather(): void {
    this.messageEmitter.emit(`Hola ${this.name} alerta despachada desde un click`)
  }

}
 /**
  * orden de ciclo de vida de los componentes
  * 1. ngOnchanges
  * 2. ngOnInit
  3. ngAfterContentInit
  4. ngAfterContentChecked
  5. ngAfterViewInit
  6. ngAfterViewChecked
  7. ngAfterContentChecked
  8. ngAfterViewChecked
  * 9. ngOnDestroy
  */