import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-articulo-carrito-card',
  templateUrl: './articulo-carrito-card.component.html',
  styleUrls: ['./articulo-carrito-card.component.css']
})
export class ArticuloCarritoCardComponent implements OnInit{

  @Input() articulo: any;

  @Output() notificar = new EventEmitter<boolean>();
  constructor(private carritoServise: CarritoService, private dialog: MatDialog){

  }

  ngOnInit(): void {
    
  }

  public borrarDeCarrito():void{
    this.carritoServise.borrarDelCarrito(this.articulo).subscribe(
      (respuesta) =>{
        if(respuesta.respuesta == true){
          this.dialog.open(DialogCarrito, {
            data: { nombreProducto: this.articulo.articulo[0].nombre, acierto: true},
          });
          this.notificar.emit(true);
        }else{
          this.dialog.open(DialogCarrito, {
            data: { nombreProducto: this.articulo.articulo[0].nombre, acierto: false},
          });
          this.notificar.emit(false);
        }
      }
    );
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

