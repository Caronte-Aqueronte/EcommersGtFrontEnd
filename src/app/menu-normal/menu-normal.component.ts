import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../servicios/logout.service';

@Component({
  selector: 'app-menu-normal',
  templateUrl: './menu-normal.component.html',
  styleUrls: ['./menu-normal.component.css'],
})
export class MenuNormalComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private logOutService: LogoutService) {}

  public logout(): void {
    this.logOutService.logOut();
  }
}
