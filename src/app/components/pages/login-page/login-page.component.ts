import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('holaaa!!!!!!!!!!!')
    let token = sessionStorage.getItem('token')

    if(token){
      this.router.navigate(['home'])
    }else{
      console.log('no hay token')
    }
  }

  loginUser(){
    sessionStorage.setItem('token', '124')
    this.router.navigate(['contacts'])
  }

}
