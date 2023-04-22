import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../servicios/articulo.service';

@Component({
  selector: 'app-muro',
  templateUrl: './muro.component.html',
  styleUrls: ['./muro.component.css'],
})
export class MuroComponent implements OnInit {
  //articulos en el muro
  articulos: Array<any>;

  constructor(private articuloService: ArticuloService) {
    this.articulos = []; //iniciar los articulos
    this.mostrarTodosLosArticulos();
  }
  ngOnInit(): void {}

  public mostrarTodosLosArticulos(): void {
    //mandar a traer todos los articulos en el muro
    this.articuloService.mostrarArticulos().subscribe((respuesta) => {
      this.articulos = respuesta;
    });
  }

  public cambioEnSelect(event: any): void {
    const categoria = event.target.value; //obtenemos el valor del select
    if (categoria == 'Todo') {//si la categoria a buscar es todo entonces mostramos todos
      this.mostrarTodosLosArticulos();
    } else {
      //mandamos a traer los articulos por la categoria
      this.articuloService
        .buscarArticuloPorCategoria(categoria)
        .subscribe((respuesta) => {
          this.articulos = respuesta;
        });
    }
  }
}
