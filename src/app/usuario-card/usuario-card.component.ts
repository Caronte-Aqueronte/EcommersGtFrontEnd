import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.css'],
})
export class UsuarioCardComponent {
  @Input() usuario: any;

  constructor(private router: Router) {}

  public mandarAEditarUsuario(): void {
    this.router.navigate([
      `menu-administracion/editar-usuario//${this.usuario._id}`,
    ]);
  }
}
