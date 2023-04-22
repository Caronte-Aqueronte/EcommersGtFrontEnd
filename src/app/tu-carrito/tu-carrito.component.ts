import { Component, Inject, OnInit } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-tu-carrito',
  templateUrl: './tu-carrito.component.html',
  styleUrls: ['./tu-carrito.component.css'],
})
export class TuCarritoComponent implements OnInit {
  carrito: Array<any>;
  constructor(
    private carritoService: CarritoService,
    private dialog: MatDialog
  ) {
    this.carrito = [];
    this.mostrarArticulos();
  }
  ngOnInit(): void {}

  /**
   * Manda a llamar a todos los articulos de un carrito a la api
   */
  private mostrarArticulos(): void {
    this.carritoService.mostrarCarritoDeUsuario().subscribe((respuesta) => {
      this.carrito = respuesta;
    });
  }

  /**
   * Detecta cuando un articulo ha sido borrado del carrito y refresca los componentes
   * @param event
   */
  public mostrarDialog(event: any) {
    if (event == true) {
      //si se ejecuta el evento y la bandera es true entonces cargamos los componentes de nuevo
      this.mostrarArticulos();
    }
  }

  public borrarTodoElCarrito(): void {
    this.carritoService.borraTodoElCarrito().subscribe((respuesta) => {
      if (respuesta == null) {
        this.openDialog("Parametros vacios.", false);
      }
      if(respuesta.respuesta == true){
        this.openDialog("Se elimino todo el carrito con extito.", true);
        this.mostrarArticulos();
      }else{
        this.openDialog("No se elimino el carrito.", false);
      }
    });
  }

  public openDialog(mensaje: string, acierto: boolean): void {
    this.dialog.open(DialogCarrito, {
      data: { mensaje: mensaje, acierto: acierto },
    });
  }
}

//Clases que son las encargadas de mostrar un dialog
export interface DialogData {
  mensaje: string;
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
