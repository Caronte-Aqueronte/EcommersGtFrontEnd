import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { MenuNormalComponent } from './menu-normal/menu-normal.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';

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
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
