import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../clases/usuario';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  banderaError: boolean = false;
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usuarioServise: UsuarioService,
    private cookiesService: CookieService
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

  public login() {
    //seteamos la bandera de error como false
    this.banderaError = false;
    const passwordEntry = this.formLogin.value['password'];
    const correoEntry = this.formLogin.value['correoElectronico'];
    const usuario = new Usuario(correoEntry, passwordEntry, ' ');
    this.usuarioServise.login(usuario).subscribe((respuesta: any) => {
      //si no se devuelve null entonces decidimos a que menu enviar al usuario
      if (respuesta) {
        //guardamos la info del cliente
        this.cookiesService.set('correoElectronicoEcommers', correoEntry);
        if (respuesta.usuarioEncontrado.rol === 'Comun') {
          //redireccionamos al usuario a su panel principal
          this.router.navigate(['/menu/muro']);
        } else if (respuesta.usuarioEncontrado.rol === 'Paqueteria') {
          //redireccionamos al usuario a su panel principal
          this.router.navigate(['/menu-paqueteria/pedidos']);
        }
      } else {
        this.banderaError = true; //si el login fallo entonces activamos el error
      }
    });
  }
}
