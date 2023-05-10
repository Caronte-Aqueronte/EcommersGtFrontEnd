import { Component } from '@angular/core';
import { PedidoService } from '../servicios/pedido.service';

@Component({
  selector: 'app-seguimiento-de-pedidos-paqueteria',
  templateUrl: './seguimiento-de-pedidos-paqueteria.component.html',
  styleUrls: ['./seguimiento-de-pedidos-paqueteria.component.css'],
})
export class SeguimientoDePedidosPaqueteriaComponent {
  public pedidosPendientes: Array<any>;

  constructor(private pedidoService: PedidoService) {
    this.pedidosPendientes = [];
    this.mostrarPediddosPendientes();
  }

  private mostrarPediddosPendientes(): void {
    this.pedidoService.mostrarPediddosPendientes().subscribe((respuesta: any) => {
      this.pedidosPendientes = respuesta;
    });
  }

  public verSiRefrescar(event:any):void{
    if(event){
      this.mostrarPediddosPendientes();
    }
  }
}
