import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PedidoService } from '../servicios/pedido.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css'],
})
export class EditarPedidoComponent {
  pedido: any;
  formEditarInfo: FormGroup; //form de edicion
  banderaErrorInfo: boolean = false;
  banderaAciertoInfo: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private pedidoService: PedidoService,
    private rutaActiva: ActivatedRoute
  ) {
    this.formEditarInfo = this.formBuilder.group({
      fechaEntrega: ['', [Validators.required, Validators.minLength(1)]],
    });
    this.buscarPedidoPorId();
  }

  public buscarPedidoPorId(): void {
    const id = this.rutaActiva.snapshot.params['id']; //obtenemos el id d los parametros que nos envian
    this.pedidoService.buscarPedidoPorId(id).subscribe((respuesta) => {
      this.pedido = respuesta; //seteamos el pedido
      this.formEditarInfo.controls['fechaEntrega'].setValue(respuesta.fechaEntrega);
    });
  }
  public editarInfoDeUnPedido(): void {
    const id = this.rutaActiva.snapshot.params['id']; //obtenemos el id d los parametros que nos envian
    const nuevaFecha = this.formEditarInfo.controls['fechaEntrega'].value; //obtener la fecha del txt fecha

    this.pedidoService.editarInfoDeUnPedido(id, nuevaFecha).subscribe((res) => {
      if (res.respuesta) {
        alert('Se cambio la fecha del pedido con exito.');
        this.buscarPedidoPorId();
      } else {
        alert('No se cambio la fecha del pedido.');
      }
    });
  }
}
