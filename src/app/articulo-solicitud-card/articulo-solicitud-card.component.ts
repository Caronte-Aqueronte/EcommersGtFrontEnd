import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ArticuloService } from '../servicios/articulo.service';

@Component({
  selector: 'app-articulo-solicitud-card',
  templateUrl: './articulo-solicitud-card.component.html',
  styleUrls: ['./articulo-solicitud-card.component.css'],
})
export class ArticuloSolicitudCardComponent {
  @Input() articulo: any;
  @Output() notificar = new EventEmitter<boolean>();
  constructor(private articuloService: ArticuloService) {}

  public publicar(): void {
    const id = this.articulo._id; //mandar a traer el id del articulo
    this.articuloService.publicarArticulo(id).subscribe((r) => {
      if (r.respuesta) {
        alert("Se autorizo el articulo con exito.");
        this.notificar.emit(true);
      } else {
        alert("No se autorizo el articulo.");
        this.notificar.emit(false);
      }
    });
  }
}
