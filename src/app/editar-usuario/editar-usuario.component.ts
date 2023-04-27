import { Component } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent {
  formEditar: FormGroup; //formulario para la subida de archivos

  banderaError: boolean = false;
  banderaAcierto: boolean = false;

  usuario: any;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private rutaActiva: ActivatedRoute
  ) {
    this.formEditar = this.formBuilder.group({
      correoElectronico: [
        '',
        [Validators.required, Validators.minLength(1), Validators.email],
      ],
      password: ['', [Validators.required, Validators.minLength(1)]],
      rol: ['', [Validators.required]],
    });
    this.traerUsuarioPorId();
  }

  get correoElectronico() {
    return this.formEditar.get('correoElectronico');
  }
  get password() {
    return this.formEditar.get('password');
  }

  get rol() {
    return this.formEditar.get('rol');
  }

  public editarUsuario() {
    this.banderaAcierto = false;
    this.banderaError = false;

    const id = this.rutaActiva.snapshot.params['id']; //obtenemos el id del usuario a editar
    this.usuarioService.editarUsuario(id, this.formEditar.value).subscribe((r) => {
      if (r.respuesta == true) {
        this.banderaAcierto = true;
      } else {
        this.banderaError = true;
      }
    });
  }

  public traerUsuarioPorId() {
    const id = this.rutaActiva.snapshot.params['id']; //obtenemos el id del usuario a editar
    this.usuarioService.traerUsuarioPorId(id).subscribe((r) => {
      this.usuario = r;
      console.log(this.usuario);
      this.formEditar.controls['correoElectronico'].setValue(
        r.usuarioEncontrado.correoElectronico
      );
      this.formEditar.controls['rol'].setValue(r.usuarioEncontrado.rol);
    });
  }
}
