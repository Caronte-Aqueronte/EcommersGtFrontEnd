import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../clases/usuario';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
})
export class CrearUsuarioComponent implements OnInit {
  formLogin: FormGroup;
  banderaError: boolean = false;
  banderaAcierto: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioServise: UsuarioService
  ) {
    this.formLogin = this.formBuilder.group({
      correoElectronico: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(1),
          Validators.maxLength(256),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  get correoElectronico() {
    return this.formLogin.get('correoElectronico');
  }
  get password() {
    return this.formLogin.get('password');
  }

  public crearUsuario() {
    //seteamos las banderas como false
    this.banderaAcierto = false;
    this.banderaError = false;
    //
    const passwordEntry = this.formLogin.value['password'];
    const correoEntry = this.formLogin.value['correoElectronico'];
    const usuario = new Usuario(correoEntry, passwordEntry, '');
    this.usuarioServise.crearUsuario(usuario).subscribe((respuesta: any) => {
      if (respuesta['respuesta'] == true) {
        this.banderaAcierto = true;
      } else {
        this.banderaError = true;
      }
    });
  }
}
