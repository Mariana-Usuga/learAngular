import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interfaces';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  task1: ITask = {
    title: 'Task 1',
    description: 'descrip 1',
    completed: false,
    level: Levels.Info 
  }

  task2: ITask = {
    title: 'Task 2',
    description: 'descrip 2',
    completed: true,
    level: Levels.Urgent 
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: ITask){
    //TODO: sustituir por un splice para eliminar de la lista de tareas
    alert(`eliminar la tarea en list ${task.title}`)
  }

}
