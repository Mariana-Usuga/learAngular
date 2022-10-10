import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, OnDestroy{

  //suscripcion de servicio
  subcription: Subscription | undefined; 

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log('ongOnInit')
    this.authService.login('eve.holt@reqres.in', '98688')?.subscribe(
      (response) => {
        console.log('res', response)
        sessionStorage.setItem('token', response.token)
      },
      (err) => console.error('ha ocurrido un error', err),
      () => console.info('se ha completado la llamada del login a request')
    )
  }

  ngOnDestroy(): void {
    this.subcription?.unsubscribe()
  }

}
