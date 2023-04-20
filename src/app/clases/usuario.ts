export class Usuario {

  correoElectronico: String;
  password: String;
  rol: String;

  constructor(correoElectronico: String, password: String, rol: String) {
    this.correoElectronico = correoElectronico;
    this.password = password;
    this.rol = rol;
  }
}
