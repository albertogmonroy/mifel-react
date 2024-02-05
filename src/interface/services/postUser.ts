export interface RequestPostUser {
  infoUsuario: DatosUsuario;
  Domicilio: Domicilio;
}

export interface DatosUsuario {
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  curp: string;
  rfc: string;
}
export interface Domicilio {
  cp: string;
  calle: string;
  numExt: string;
  numInt: string;
  estado: string;
  municipio: string;
  colonia: string;
}
