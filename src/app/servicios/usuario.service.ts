import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../clases/usuario';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = 'http://localhost:3000/usuario';//url de la api
  constructor(private http: HttpClient) { }

  public login(usuario: Usuario): Observable<any> {
    return this.http.post<any>(
      this.url + '/login',
      usuario
    );//hacer un post a la aplicacion enviando la info del cliente
  }

  public crearUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(
      this.url + '/crearUsuario',
      usuario
    );//hacer un post a la aplicacion enviando la info del cliente
  }
}
