import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../servicios/articulo.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tus-articulos',
  templateUrl: './tus-articulos.component.html',
  styleUrls: ['./tus-articulos.component.css'],
})
export class TusArticulosComponent implements OnInit {

  articulos: Array<any>;

  constructor(
    private articulosService: ArticuloService,
    private cookiesServie: CookieService
  ) {
    this.articulos = [];
    //mandamos a traer el array de articulos del usuario
    this.traerArticulos();
  }

  ngOnInit(): void {}

  public traerArticulos():void{
    //mandamos a traer el usuario
    const usuario = this.cookiesServie.get('correoElectronicoEcommers');
    this.articulosService.mostrarArticulosDeUsuario(usuario).subscribe(
      (respuesta : any) => {
        //igualamos la lista de articlos con la lista obtenida
        this.articulos = respuesta;
      }
    );
  }
}
