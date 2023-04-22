import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';

@Component({
  selector: 'app-tu-carrito',
  templateUrl: './tu-carrito.component.html',
  styleUrls: ['./tu-carrito.component.css'],
})
export class TuCarritoComponent implements OnInit {
  carrito: Array<any>;
  constructor(private carritoService: CarritoService) {
    this.carrito = [];
    this.mostrarArticulos();
  }
  ngOnInit(): void {}

  private mostrarArticulos(): void {
    this.carritoService.mostrarCarritoDeUsuario().subscribe((respuesta) => {
      this.carrito = respuesta;
      console.log(this.carrito);
    });
  }

  public mostrarDialog(event: any) {
    if (event == true) {
      this.mostrarArticulos();
    }
  }
}
