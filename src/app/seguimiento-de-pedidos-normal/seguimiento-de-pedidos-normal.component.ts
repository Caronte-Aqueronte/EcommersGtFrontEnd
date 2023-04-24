import { Component } from '@angular/core';
import { PedidoService } from '../servicios/pedido.service';

@Component({
  selector: 'app-seguimiento-de-pedidos-normal',
  templateUrl: './seguimiento-de-pedidos-normal.component.html',
  styleUrls: ['./seguimiento-de-pedidos-normal.component.css'],
})
export class SeguimientoDePedidosNormalComponent {
  public pedidos: Array<any>;

  constructor(private pedidoService: PedidoService) {
    this.pedidos = [];
    this.mostrarPediddos();
  }

  private mostrarPediddos(): void {
    this.pedidoService.mostrarPediddosDeUsuario().subscribe((respuesta) => {
      if(respuesta == null){
        return;
      }

      this.pedidos = respuesta;

      console.log(this.pedidos);
    });
  }
}
