import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { MenuNormalComponent } from './menu-normal/menu-normal.component';
import { CookieService } from 'ngx-cookie-service';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { ArticuloDeUsuarioCardComponent } from './articulo-de-usuario-card/articulo-de-usuario-card.component';
import { TusArticulosComponent } from './tus-articulos/tus-articulos.component';
import { EditarArticuloComponent } from './editar-articulo/editar-articulo.component';
import { MuroComponent } from './muro/muro.component';
import { ArticuloMuroCardComponent } from './articulo-muro-card/articulo-muro-card.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuCarritoComponent } from './tu-carrito/tu-carrito.component';
import { ArticuloCarritoCardComponent } from './articulo-carrito-card/articulo-carrito-card.component';
import { PagarCarritoComponent } from './pagar-carrito/pagar-carrito.component';
import { SeguimientoDePedidosNormalComponent } from './seguimiento-de-pedidos-normal/seguimiento-de-pedidos-normal.component';
import { MenuPaqueteriaComponent } from './menu-paqueteria/menu-paqueteria.component';
import { SeguimientoDePedidosPaqueteriaComponent } from './seguimiento-de-pedidos-paqueteria/seguimiento-de-pedidos-paqueteria.component';
import { PedidoPaqueteriaCardComponent } from './pedido-paqueteria-card/pedido-paqueteria-card.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';
import { ArticuloSolicitudCardComponent } from './articulo-solicitud-card/articulo-solicitud-card.component';
import { MuroSolicitudesComponent } from './muro-solicitudes/muro-solicitudes.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, CrearUsuarioComponent, MenuNormalComponent, CrearArticuloComponent, ArticuloDeUsuarioCardComponent, TusArticulosComponent, EditarArticuloComponent, MuroComponent, ArticuloMuroCardComponent, TuCarritoComponent, ArticuloCarritoCardComponent, PagarCarritoComponent, SeguimientoDePedidosNormalComponent, MenuPaqueteriaComponent, SeguimientoDePedidosPaqueteriaComponent, PedidoPaqueteriaCardComponent, EditarPedidoComponent, ArticuloSolicitudCardComponent, MuroSolicitudesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  exports: [FormsModule, ReactiveFormsModule],
})
export class AppModule {}
