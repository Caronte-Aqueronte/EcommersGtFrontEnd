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
}
