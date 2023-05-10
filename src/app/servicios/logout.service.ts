import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private cookiesService:CookieService, private router:Router) { }

  public logOut():void{
    this.cookiesService.delete('correoElectronicoEcommers');//eliminamos la cookie del usuario
  }
}
