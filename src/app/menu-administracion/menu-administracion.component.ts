import { Component } from '@angular/core';
import { LogoutService } from '../servicios/logout.service';

@Component({
  selector: 'app-menu-administracion',
  templateUrl: './menu-administracion.component.html',
  styleUrls: ['./menu-administracion.component.css']
})
export class MenuAdministracionComponent {

  constructor(private logOutService:LogoutService){

  }

  public logout():void{
    this.logOutService.logOut();
  }
}
