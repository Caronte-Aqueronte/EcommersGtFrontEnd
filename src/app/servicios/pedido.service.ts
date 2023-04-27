import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private url: string = 'http://localhost:3000/pedido'; //url de la api
  constructor(
    private http: HttpClient,
    private cookiesService: CookieService
  ) {}

  public mostrarPediddosDeUsuario(): Observable<any> {
    const usuario = this.cookiesService.get('correoElectronicoEcommers'); //obtener el usuario
    return this.http.get<Observable<any>>(
      this.url + `/mostrarPedidos?usuario=${usuario}`
    ); //enviar get al servidor
  }

  public mostrarPediddosPendientes(): Observable<any> {
    return this.http.get<Observable<any>>(
      this.url + `/mostrarPedidosPendientes`
    ); //enviar get al servidor
  }

  /**
   * Envia un post a /entregarPedido al backend para entregar el pedido enviado
   * @param pedido
   * @returns
   */
  public entregarPedido(pedido: any): Observable<any> {
    return this.http.post<Observable<any>>(
      this.url + '/entregarPedido',
      pedido
    );
  }

  /**
   * Envia un get a /buscarPedidoPorId al backend para nuscar un pedido por id
   * @param pedido
   * @returns
   */
  public buscarPedidoPorId(id: any): Observable<any> {
    return this.http.get<Observable<any>>(
      this.url + `/buscarPedidoPorId?id=${id}`
    );
  }

  /**
   * Envia un post al backend para ,andar a editar la fecha de entrega de un pedido
   * @param id 
   * @param nuevaFecha 
   * @returns 
   */
  public editarInfoDeUnPedido(id: any, nuevaFecha: any): Observable<any> {
    const aEditar = new Object({id: id, nuevaFecha: nuevaFecha});
    return this.http.post<Observable<any>>(
      this.url + `/editarInfoDeUnPedido`, aEditar
    );
  }
}
