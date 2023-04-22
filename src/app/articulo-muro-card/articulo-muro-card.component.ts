import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CarritoService } from '../servicios/carrito.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-articulo-muro-card',
  templateUrl: './articulo-muro-card.component.html',
  styleUrls: ['./articulo-muro-card.component.css'],
})
export class ArticuloMuroCardComponent implements OnInit {
  @Input() articulo: any;

  constructor(
    private cookiesService: CookieService,
    private carritoService: CarritoService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {}

  public anadirAlCarrito(): void {
    //extraer el id del producto
    const id = this.articulo._id;
    //extraer el nombre del usuario
    const usuario = this.cookiesService.get('correoElectronicoEcommers');

    this.carritoService
      .ingresarProductoACarrito(id, usuario)
      .subscribe((respuesta) => {
        if (respuesta.respuesta == true) {//si la respuesta fue true entonces mostramos mensaje de confirmacion
          this.dialog.open(DialogCarrito, {
            data: { nombreProducto: this.articulo.nombre, acierto: true},
          });
        }else{
          this.dialog.open(DialogCarrito, {
            data: { nombreProducto: this.articulo.nombre, acierto: false},
          });
        }
      }); //nos suscribimos al metodo que ingresa un producto en el carrito


  }
}


//Clases que son las encargadas de mostrar un dialog
export interface DialogData {
  nombreProducto: string;
  acierto: boolean
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
