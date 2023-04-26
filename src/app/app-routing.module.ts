import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { MenuNormalComponent } from './menu-normal/menu-normal.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { TusArticulosComponent } from './tus-articulos/tus-articulos.component';
import { EditarArticuloComponent } from './editar-articulo/editar-articulo.component';
import { MuroComponent } from './muro/muro.component';
import { TuCarritoComponent } from './tu-carrito/tu-carrito.component';
import { PagarCarritoComponent } from './pagar-carrito/pagar-carrito.component';
import { SeguimientoDePedidosNormalComponent } from './seguimiento-de-pedidos-normal/seguimiento-de-pedidos-normal.component';
import { MenuPaqueteriaComponent } from './menu-paqueteria/menu-paqueteria.component';
import { SeguimientoDePedidosPaqueteriaComponent } from './seguimiento-de-pedidos-paqueteria/seguimiento-de-pedidos-paqueteria.component';
import { EditarPedidoComponent } from './editar-pedido/editar-pedido.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'crear-usuario', component: CrearUsuarioComponent },
  {
    path: 'menu',
    component: MenuNormalComponent,
    children: [
      {
        path: 'crear-articulo',
        component: CrearArticuloComponent,
      },
      {
        path: 'tus-articulos',
        component: TusArticulosComponent,
      },
      {
        path: 'editar-articulo/:id',
        component: EditarArticuloComponent,
      },
      {
        path: 'muro',
        component: MuroComponent,
      },
      {
        path: 'carrito',
        component: TuCarritoComponent,
      },
      {
        path: 'pagar-carrito',
        component: PagarCarritoComponent,
      },
      {
        path: 'seguimiento',
        component: SeguimientoDePedidosNormalComponent,
      },
    ],
  },
  {
    path: 'menu-paqueteria',
    component: MenuPaqueteriaComponent,
    children: [
      {
        path: 'pedidos',
        component: SeguimientoDePedidosPaqueteriaComponent,
      },
      {
        path: 'editar-pedido/:id',
        component: EditarPedidoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
