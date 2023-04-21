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

@NgModule({
  declarations: [AppComponent, LoginComponent, CrearUsuarioComponent, MenuNormalComponent, CrearArticuloComponent, ArticuloDeUsuarioCardComponent, TusArticulosComponent, EditarArticuloComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  exports: [FormsModule, ReactiveFormsModule],
})
export class AppModule {}
