import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interfaces';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: ITask | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(){
    console.log('Eliminar tarea', this.task?.title)
  }

}
