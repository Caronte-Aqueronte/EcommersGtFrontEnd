import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  private url: string = 'http://localhost:3000/articulo'; //url de la api

  constructor(
    private http: HttpClient,
    private cookiesService: CookieService
  ) {}

  public crearArticulo(articulo: any, imagen: File): Observable<any> {
    const form = new FormData(); //creamos el form
    form.append('usuarioVendedor', this.cookiesService.get('correoElectronicoEcommers'));//extraer el usuario vendedor de los cookies
    form.append('nombre', articulo.nombre);
    form.append('descripcion', articulo.descripcion);
    form.append('precio', articulo.precio);
    form.append('categoria', articulo.categoria);
    form.append('file', imagen, 'form-data'); //adjuntar la imagen
    return this.http.post<any>(this.url + '/crear-articulo', form);
  }

  public mostrarArticulos() {
    return this.http.get(this.url + '/mostrar-articulos');
  }
}
