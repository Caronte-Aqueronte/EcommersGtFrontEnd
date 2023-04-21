import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulo-de-usuario-card',
  templateUrl: './articulo-de-usuario-card.component.html',
  styleUrls: ['./articulo-de-usuario-card.component.css']
})
export class ArticuloDeUsuarioCardComponent {

  @Input() articulo: any; // decorate the property with @Input()

  constructor(private router: Router){

  }

  public enviarAEdicion():void{

    //redireccionar al panel de edicion
    this.router.navigate([`menu/editar-articulo/${this.articulo._id}`]);
  }

}
