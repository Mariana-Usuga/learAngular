import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicListComponent } from './basic-list/basic-list.component';



@NgModule({
  declarations: [
    BasicListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    //exportamos clases (componentes/pipes, services, etc) que queremos compartir
    //importe este modulo
    BasicListComponent
  ]
})
export class ListsModule { }
