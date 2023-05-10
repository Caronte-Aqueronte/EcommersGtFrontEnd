import { Component } from '@angular/core';
import { ReporteService } from '../servicios/reporte.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
})
export class ReportesComponent {
  //id de las columnas a desplegar
  public displayedColumns: any;
  //conjunto de datos que se desplegaran
  public dataSource: any;
  //boleana que indica si la tabla debera ser cargada o no
  public banderaTabla: boolean = false;

  formReportes: FormGroup;

  //conjunto de columnas que serviran para mostrar los datos
  public columnas: Array<any> = [];

  constructor(
    private reporteService: ReporteService,
    private formBuilder: FormBuilder
  ) {
    this.formReportes = this.formBuilder.group({
      fecha1: ['', [Validators.required]],
      fecha2: ['', [Validators.required]],
      tipoReporte: [
        'Top 10 productos más vendidos en un intervalo de tiempo',
        [Validators.required],
      ],
    });
  }

  public traerReporte(): void {
    //traer el valor del tipo de reporte
    const tipoReporte = this.formReportes.controls['tipoReporte'].value;
    switch (tipoReporte) {
      case 'Top 10 productos más vendidos en un intervalo de tiempo':
        this.diezProductosMasVendidos();
        break;
      case 'Top 5 clientes que más ganancias por compras han generado en un intervalo de tiempo':
        this.cincoClientesQueMasGananciaGeneran();
        break;
      case 'Top 5 clientes que más productos han vendido en un intervalo de tiempo':
        this.cincoClientesQueMasVentasTienen();
        break;
      case 'Top 10 clientes que más pedidos han realizado en un intervalo de tiempo':
        this.cincoClientesQueMasPedidosGeneran();
        break;
      case 'Top 10 clientes que más productos tienen a la venta':
        this.diezClientesConMasProductos();
        break;
    }
  }

  public diezProductosMasVendidos(): void {
    this.reporteService
      .diezProductosMasVendidos(this.formReportes.value)
      .subscribe((r) => {
        this.banderaTabla = false; //ocultamos la tabla
        //seteamos las columnas de a tabla
        this.columnas = [
          { titulo: 'Id del articulo', name: '_id' },
          { titulo: 'Nombre del articulo', name: 'nombre' },
          { titulo: 'Usuario vendedor', name: 'usuarioVendedor' },
          { titulo: 'Numero de ventas', name: 'numVentas' },
        ];
        //setear el displayed columns
        this.displayedColumns = [
          '_id',
          'nombre',
          'usuarioVendedor',
          'numVentas',
        ];

        //ahora seteamos el source con los datos de la consulta
        this.dataSource = r;

        //mostramos la tabla
        this.banderaTabla = true;
      });
  }

  public cincoClientesQueMasGananciaGeneran(): void {
    this.reporteService
      .cincoClientesQueMasGananciaGeneran(this.formReportes.value)
      .subscribe((r) => {
        this.banderaTabla = false;
        //seteamos las columnas de a tabla
        this.columnas = [
          { titulo: 'Usuarios compradores', name: '_id' },
          { titulo: 'Gancia que genera', name: 'ganancia' },
        ];
        //setear el displayed columns
        this.displayedColumns = ['_id', 'ganancia'];

        //ahora seteamos el source con los datos de la consulta
        this.dataSource = r;

        //mostramos la tabla
        this.banderaTabla = true;
      });
  }

  public cincoClientesQueMasVentasTienen(): void {
    this.reporteService
      .cincoClientesQueMasVentasTienen(this.formReportes.value)
      .subscribe((r) => {
        this.banderaTabla = false;
        //seteamos las columnas de a tabla
        this.columnas = [
          { titulo: 'Usuarios vendedor', name: '_id' },
          { titulo: 'Numero de ventas', name: 'numVentas' },
        ];
        //setear el displayed columns
        this.displayedColumns = ['_id', 'numVentas'];

        //ahora seteamos el source con los datos de la consulta
        this.dataSource = r;

        //mostramos la tabla
        this.banderaTabla = true;
      });
  }

  public cincoClientesQueMasPedidosGeneran(): void {
    this.reporteService
      .cincoClientesQueMasPedidosGeneran(this.formReportes.value)
      .subscribe((r) => {
        this.banderaTabla = false;
        //seteamos las columnas de a tabla
        this.columnas = [
          { titulo: 'Usuarios que genero el pedido', name: '_id' },
          { titulo: 'Numero de pedidos', name: 'numPedidos' },
        ];
        //setear el displayed columns
        this.displayedColumns = ['_id', 'numPedidos'];

        //ahora seteamos el source con los datos de la consulta
        this.dataSource = r;

        //mostramos la tabla
        this.banderaTabla = true;
      });
  }

  public diezClientesConMasProductos(): void {
    this.reporteService
      .diezClientesConMasProductos()
      .subscribe((r) => {
        this.banderaTabla = false;
        //seteamos las columnas de a tabla
        this.columnas = [
          { titulo: 'Usuario', name: '_id' },
          { titulo: 'Numero de articulos', name: 'numArticulos' },
        ];
        //setear el displayed columns
        this.displayedColumns = ['_id', 'numArticulos'];

        //ahora seteamos el source con los datos de la consulta
        this.dataSource = r;

        //mostramos la tabla
        this.banderaTabla = true;
      });
  }
}
