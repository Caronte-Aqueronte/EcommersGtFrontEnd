import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticuloService } from '../servicios/articulo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styleUrls: ['./editar-articulo.component.css'],
})
export class EditarArticuloComponent implements OnInit {
  articuloAEditar: any = null; //articulo que mandaremos a editar

  formEditarInfo: FormGroup; //formulario para la subida de archivos
  formEditarImagen: FormGroup; //formulario para la subida de archivos

  imagenUrl: any = '';
  file!: File; //imagen del articulo
  banderaErrorImg: boolean = false;
  banderaAciertoImg: boolean = false;
  banderaErrorInfo: boolean = false;
  banderaAciertoInfo: boolean = false;

  constructor(
    private articulosService: ArticuloService,
    private rutaActiva: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.formEditarInfo = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(1)]],
      descripcion: ['', [Validators.required, Validators.minLength(1)]],
      precio: ['', [Validators.required, Validators.minLength(1)]],
      categoria: ['Tecnología', [Validators.required]],
    });

    this.formEditarImagen = this.formBuilder.group({
      imagen: ['', [Validators.required]],
    });

    const id = this.rutaActiva.snapshot.params['id']; //obtenemos el id d los parametros que nos envian
    //mandamos a buscar el aticulo por id
    this.articulosService
      .buscarArticuloPorId(id)
      .subscribe((respuesta: any) => {
        this.articuloAEditar = respuesta;

        //cargamos los valores en los box
        this.imagenUrl = respuesta.imagen.archivoUrl;
        this.formEditarInfo.controls['nombre'].setValue(respuesta.nombre);
        this.formEditarInfo.controls['descripcion'].setValue(
          respuesta.descripcion
        );
        this.formEditarInfo.controls['precio'].setValue(respuesta.precio);
        this.formEditarInfo.controls['categoria'].setValue(respuesta.categoria);
      });
  }
  ngOnInit(): void {}

  public editarFotoDelArticulo(): void {
    const id = this.rutaActiva.snapshot.params['id']; //obtenemos el id d los parametros que nos envian
    //nos suscribimos al metodo de edicion de imagen
    this.articulosService
      .editarImagenDeArticulo(id, this.file)
      .subscribe((respuesta: any) => {
        if (respuesta.actualizacion === true) {
          this.banderaAciertoImg = true;
        } else {
          this.banderaErrorImg = true;
        }
      });
  }

  public editarInfoDelArticulo(): void {
    const id = this.rutaActiva.snapshot.params['id']; //obtenemos el id d los parametros que nos envian
    //nos suscribimos al metodo de edicion de imagen
    this.articulosService
      .editarInformacionDeArticulo(id, this.formEditarInfo.value)
      .subscribe((respuesta: any) => {
        if (respuesta.actualizacion === true) {
          this.banderaAciertoInfo = true;
        } else {
          this.banderaErrorInfo = true;
        }
      });
  }

  public onFileChange(event: any): void {
    //se detecta el cambio del recurso en el imput file y lo despliega en un div
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]; //cuargamos el archivo

      if (file.type.includes('image')) {
        //comprobamos si es una imagen
        var reader = new FileReader(); //crear nuevo reader
        reader.readAsDataURL(file); //leer la url

        reader.onload = (event: any) => {
          //cuando acabe de cargar entonces cargamos el src a la img html
          this.imagenUrl = event.target.result;
        };

        //toca igualar los files
        this.file = file;
      } else {
        console.log('error');
      }
    }
  }
}
