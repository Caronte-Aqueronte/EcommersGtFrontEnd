import { Component } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaService } from '../servicios/tarjeta.service';

@Component({
  selector: 'app-pagar-carrito',
  templateUrl: './pagar-carrito.component.html',
  styleUrls: ['./pagar-carrito.component.css'],
})
export class PagarCarritoComponent {
  articulos: Array<any>;
  tarjetas: Array<any>;

  total: Number;
  items: Number;

  formPagar: FormGroup;
  formTarjeta: FormGroup;

  banderaMostrarMenuTarjeta: Boolean;

  banderaAciertoTarjeta: Boolean;
  banderaErrorTarjeta: Boolean;
  constructor(
    private carritoService: CarritoService,
    private formBuilder: FormBuilder,
    private tarjetaService: TarjetaService
  ) {
    this.articulos = [];
    this.tarjetas = [];
    this.total = 0;
    this.items = 0;
    this.banderaMostrarMenuTarjeta = false;
    this.banderaAciertoTarjeta = false;
    this.banderaErrorTarjeta = false;
    this.mostrarCarrito();
    this.mostrarTarjetasDeUsuario();

    //inicializar el formulario de pagar
    this.formPagar = this.formBuilder.group({
      metodoPago: ['', [Validators.required]],
    });
    //inicializar el formulario para ingresar tarjetas
    this.formTarjeta = this.formBuilder.group({
      numTarjeta: ['', [Validators.required]],
      cvc: ['', [Validators.required]],
      vencimiento: ['', [Validators.required]],
    });
  }

  /**
   * Manda a traer el carrito de un usuario
   */
  private mostrarCarrito(): void {
    this.carritoService.mostrarCarritoDeUsuario().subscribe((respuesta) => {
      this.articulos = respuesta;
      this.setearValores();
      console.log(respuesta);
    });
  }

  /**
   * Manda a traer las tarjetas de un usuario
   */
  private mostrarTarjetasDeUsuario(): void {
    this.tarjetaService.mostrarTarjetasDeUsuario().subscribe((respuesta) => {
      this.tarjetas = respuesta;
    });
  }

  /**
   * Calcula el total y el numero de items a pagar
   */
  private setearValores(): void {
    let total: Number = 0;
    for (let i = 0; i < this.articulos.length; i++) {
      total = total + this.articulos[i].articulo[0].precio;
    }
    this.total = total;
    this.items = this.articulos.length;
  }

  public mostrarOcultarMenuTarjeta(): void {
    this.banderaMostrarMenuTarjeta = !this.banderaMostrarMenuTarjeta;
  }

  public pagarCarrito(): void {}

  public guardarTarjeta(): void {
    //seteamos las banderas de notificacion como false
    this.banderaAciertoTarjeta = false;
    this.banderaErrorTarjeta = false;

    this.tarjetaService
      .guardarTarjeta(this.formTarjeta.value)
      .subscribe((respuesta) => {
        if (respuesta.respuesta == true) {
          this.banderaAciertoTarjeta = true;
          this.mostrarTarjetasDeUsuario();
        } else {
          this.banderaErrorTarjeta = true;
        }
      });
  }

  get metodoPago() {
    return this.formPagar.get('metodoPago');
  }
}
