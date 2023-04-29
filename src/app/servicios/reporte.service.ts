import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private url: string = 'http://localhost:3000/reportes'; //url de la api

  constructor(private http : HttpClient) { }


  public diezProductosMasVendidos(body:any):Observable<any>{
    return this.http.get(this.url +`/diezProductosMasVendidos?fecha1=${body.fecha1}&fecha2=${body.fecha2}`);
  }

  public cincoClientesQueMasGananciaGeneran(body:any):Observable<any>{
    return this.http.get(this.url +`/cincoClientesQueMasGananciaGeneran?fecha1=${body.fecha1}&fecha2=${body.fecha2}`);
  }

  public cincoClientesQueMasVentasTienen(body:any):Observable<any>{
    return this.http.get(this.url +`/cincoClientesQueMasVentasTienen?fecha1=${body.fecha1}&fecha2=${body.fecha2}`);
  }

  public cincoClientesQueMasPedidosGeneran(body:any):Observable<any>{
    return this.http.get(this.url +`/diezClientesQueMasPedidosGeneran?fecha1=${body.fecha1}&fecha2=${body.fecha2}`);
  }

  public diezClientesConMasProductos():Observable<any>{
    return this.http.get(this.url +`/diezClientesConMasProductos`);
  }
}
