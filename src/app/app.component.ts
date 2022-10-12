import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'learnAngular';
  usuario = 'name from app'

  token: string | null = null;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token')
  }

  logout(){
    sessionStorage.removeItem('token')
    this.router.navigate(['login'])
  }

  //se ejecuta cuando en el hijo (saludo compotente) se pulse un boton 
  //viene en el hijo pero se ejecuta en el padre
  receiveMessage(event: string){
    alert(event)
  }
}
