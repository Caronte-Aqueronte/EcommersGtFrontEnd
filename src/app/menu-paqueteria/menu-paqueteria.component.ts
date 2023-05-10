import { Component } from '@angular/core';
import { LogoutService } from '../servicios/logout.service';

@Component({
  selector: 'app-menu-paqueteria',
  templateUrl: './menu-paqueteria.component.html',
  styleUrls: ['./menu-paqueteria.component.css']
})
export class MenuPaqueteriaComponent {
  constructor(private logOutService: LogoutService) {}

  public logout(): void {
    this.logOutService.logOut();
  }
}
