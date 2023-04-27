import { Component } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-muro-usuarios',
  templateUrl: './muro-usuarios.component.html',
  styleUrls: ['./muro-usuarios.component.css'],
})
export class MuroUsuariosComponent {
  usuarios: any;
  constructor(private usuarioService: UsuarioService) {
    this.mostarUsuariosAdminYPqueteria();
  }

  public mostarUsuariosAdminYPqueteria(): void {
    this.usuarioService.mostarUsuariosAdminYPqueteria().subscribe((r) => {
      this.usuarios = r;
    });
  }
}
