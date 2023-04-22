import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TarjetaService {
  private url: string = 'http://localhost:3000/tarjeta'; //url de la api
  constructor(
    private http: HttpClient,
    private cookiesService: CookieService
  ) {}

  public guardarTarjeta(tarjeta: any): Observable<any> {
    const usuarioCookies = this.cookiesService.get('correoElectronicoEcommers');
    const body = new Object({ usuario: usuarioCookies, tarjeta: tarjeta });
    return this.http.post<Observable<any>>(this.url + '/guardarTarjeta', body);
  }

  public mostrarTarjetasDeUsuario(): Observable<any> {
    const usuarioCookies = this.cookiesService.get('correoElectronicoEcommers');

    return this.http.get<Observable<any>>(
      this.url + `/mostrarTarjetasDeUsuario?usuario=${usuarioCookies}`
    );
  }
}
