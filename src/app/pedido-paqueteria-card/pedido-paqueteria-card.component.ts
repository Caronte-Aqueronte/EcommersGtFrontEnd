import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { PedidoService } from '../servicios/pedido.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-paqueteria-card',
  templateUrl: './pedido-paqueteria-card.component.html',
  styleUrls: ['./pedido-paqueteria-card.component.css'],
})
export class PedidoPaqueteriaCardComponent {
  @Input() pedido: any;
  @Output() notificar = new EventEmitter<boolean>();

  constructor(
    private pedidoService: PedidoService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  public entregarPedido(): void {
    this.pedidoService.entregarPedido(this.pedido).subscribe((respuesta) => {
      if (respuesta) {
        this.dialog.open(DialogCarrito, {
          data: {
            nombreProducto: this.pedido.nombre,
            acierto: respuesta.respuesta,
          },
        });
        this.notificar.emit(respuesta.respuesta); //notificamos para hacer el refresco de pagina
      }
    });
  }

  public aEdicion(): void {
    this.router.navigate([`menu-paqueteria/editar-pedido/${this.pedido._id}`]);
  }
}

//Clases que son las encargadas de mostrar un dialog
export interface DialogData {
  nombreProducto: string;
  acierto: boolean;
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.html',
  styleUrls: ['dialog-elements-example-dialog.css'],
})
export class DialogCarrito {
  constructor(
    public dialogRef: MatDialogRef<DialogCarrito>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
