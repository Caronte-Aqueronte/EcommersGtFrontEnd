import { Component } from '@angular/core';
import { ArticuloService } from '../servicios/articulo.service';

@Component({
  selector: 'app-muro-solicitudes',
  templateUrl: './muro-solicitudes.component.html',
  styleUrls: ['./muro-solicitudes.component.css'],
})
export class MuroSolicitudesComponent {
  articulos: Array<any>;
  constructor(private articulosService: ArticuloService) {
    this.articulos = [];
    this.mostrarNoPublicados();
  }

  public mostrarNoPublicados(): void {
    this.articulosService.mostrarNoPublicados().subscribe((r) => {
      this.articulos = r;
    });
  }

  public refrescar(event:any):void{
    if(event){
      this.mostrarNoPublicados();
    }
  }
}
