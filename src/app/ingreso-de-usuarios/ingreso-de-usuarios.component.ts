import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-ingreso-de-usuarios',
  templateUrl: './ingreso-de-usuarios.component.html',
  styleUrls: ['./ingreso-de-usuarios.component.css'],
})
export class IngresoDeUsuariosComponent {
  formUsuario: FormGroup; //formulario para la subida de archivos

  banderaError: boolean = false;
  banderaAcierto: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.formUsuario = this.formBuilder.group({
      correoElectronico: [
        '',
        [Validators.required, Validators.minLength(1), Validators.email],
      ],
      password: ['', [Validators.required, Validators.minLength(1)]],
      rol: ['Administrador', [Validators.required]],
    });
  }

  get correoElectronico() {
    return this.formUsuario.get('correoElectronico');
  }
  get password() {
    return this.formUsuario.get('password');
  }

  get rol() {
    return this.formUsuario.get('rol');
  }

  public crearUsuario(): void {
    this.usuarioService.crearUsuarioAdminOPaqueteria(this.formUsuario.value).subscribe(
      (r)=>{
        if(r.respuesta){
          this.banderaAcierto = true;
        }
        else{
          this.banderaAcierto = false;
        }
      }
    );
  }
  public borrarCampos(): void {
    this.formUsuario.controls['descripcion'].setValue('');
    this.formUsuario.controls['imagen'].setValue('');
  }
}
