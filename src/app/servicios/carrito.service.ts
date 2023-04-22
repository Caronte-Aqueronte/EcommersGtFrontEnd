import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private url: string = 'http://localhost:3000/carrito'; //url de la api
  constructor(
    private http: HttpClient,
    private cookiesService: CookieService
  ) {}

  /**
   * Envia un formData ha /ingresarProductoACarrito por post para ingresar un articulo al carrito del cliente
   * @param id
   * @param usuario
   * @returns
   */
  public ingresarProductoACarrito(
    id: string,
    usuario: string
  ): Observable<any> {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('usuario', usuario);
    return this.http.post<Observable<any>>(
      this.url + '/ingresarProductoACarrito',
      formData
    );
  }
  /**
   * envia un post hacie /borrarDelCarrito de la api para borrar el articulo del carrito
   * @param articulo
   * @returns
   */
  public borrarDelCarrito(articulo: any): Observable<any> {
    return this.http.post<Observable<any>>(
      this.url + '/borrarDelCarrito',
      articulo
    );
  }

  /**
   * envia un post hacie /borraTodoElCarrito de la api para borrar todo el carrito de un usuario
   * @param articulo
   * @returns
   */
  public borraTodoElCarrito(): Observable<any> {
    //mandamos a traer al usuario
    const usuarioCookies = this.cookiesService.get('correoElectronicoEcommers');
    const usuario  = new Object({usuario: usuarioCookies});
    return this.http.post<Observable<any>>(
      this.url + '/borraTodoElCarrito',
      usuario
    );
  }

  /**
   * envia un get ha /mostrarCarritoDeUsuario para obtener el carrito de un usuario
   * @returns
   */
  public mostrarCarritoDeUsuario(): Observable<any> {
    //mandamos a traer al usuario
    const usuario = this.cookiesService.get('correoElectronicoEcommers');
    return this.http.get<Observable<any>>(
      this.url + `/mostrarCarritoDeUsuario?usuario=${usuario}`
    );
  }
}
