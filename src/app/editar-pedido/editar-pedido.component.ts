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
    this.pedidoService.buscarPedidoPorId(id).subscribe((respuesta) =>{
      let fechaFormateada = new Date( respuesta.fechaEntrega).toISOString().slice(0,10);//creamos una nueva fecha formateada a partir de la fecha enviada
      this.formEditarInfo.controls['fechaEntrega'].setValue(
       fechaFormateada
      );
    });
  }
  public editarInfoDeUnPedido(): void {}
}
