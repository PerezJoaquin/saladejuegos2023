import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = this._login.usuarioActivo;

  constructor(public _login:LoginService, private _router:Router){
    const logg = localStorage.getItem('nombre')
    if(logg == ""){
      console.log(_router.url)
      _router.navigate(['login'])
    }else{
      _login.reloadNom();
      _router.navigate(['home'])
    }
  }

  logout(){
    try {
      this._login.logout();
      localStorage.setItem('nombre', "");
      this._router.navigate(['login'])
    } catch (error) {
      
    }
    
  }

  reg(){
    this._router.navigate(['registro'])
  }

  quiensoy(){
    this._router.navigate(['quienSoy'])
  }

  relogin(){
    this._router.navigate(['login'])
  }

  /**/
}
