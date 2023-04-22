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

  public editarImagenDeArticulo(id: string, imagen: File): Observable<any> {
    const form = new FormData(); //creamos el form
    form.append('id', id);
    form.append('file', imagen, 'form-data'); //adjuntar la imagen
    return this.http.post<any>(this.url + '/editarImg', form);
  }

  public editarInformacionDeArticulo(id: string, articulo: any): Observable<any> {
    const form = new FormData(); //creamos el form
    form.append('id', id);
    form.append('nombre', articulo.nombre);
    form.append('descripcion', articulo.descripcion);
    form.append('precio', articulo.precio);
    form.append('categoria', articulo.categoria);
    return this.http.post<any>(this.url + '/editarInfo', form);
  }

  public mostrarArticulos():Observable<any> {
    return this.http.get<Observable<any>>(this.url + '/mostrar-articulos');
  }


  public mostrarArticulosDeUsuario(usuario: String) : Observable<any>{
    return this.http.get<Observable<any>>(this.url + `/mostrar-articulos-de-usuario?usuario=${usuario}`);
  }

  public buscarArticuloPorId(id: String): Observable<any>{
    return this.http.get<Observable<any>>(this.url + `/bucarArticuloPorId?id=${id}`);
  }

  public buscarArticuloPorCategoria(categoria: String): Observable<any>{
    return this.http.get<Observable<any>>(this.url + `/bucarPorCategoria?categoria=${categoria}`);
  }
}
