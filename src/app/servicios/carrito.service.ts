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
  constructor(private http: HttpClient, private cookiesService: CookieService) {}

  public ingresarProductoACarrito(id: string, usuario:string): Observable<any> {
    const formData = new FormData()
    formData.append("id", id);
    formData.append("usuario", usuario)
    return this.http.post<Observable<any>>(
      this.url + '/ingresarProductoACarrito',
      formData
    );
  }

  public mostrarCarritoDeUsuario(): Observable<any>{
    //mandamos a traer al usuario
    const usuario = this.cookiesService.get('correoElectronicoEcommers');
    return this.http.get<Observable<any>>(this.url + `/mostrarCarritoDeUsuario?usuario=${usuario}`);
  }

  public borrarDelCarrito(articulo: any): Observable<any> {

    return this.http.post<Observable<any>>(
      this.url + '/borrarDelCarrito',
      articulo
    );
  }
}
