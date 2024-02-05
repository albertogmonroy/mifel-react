import { FormInterface } from "../../interface/form/formInterface";
import { ResponseUsersService } from "../../interface/services/getUsersServiec";

export const helperSubmit = (data: FormInterface) => {
  return {
    infoUsuario: {
      nombre: data.nombre,
      primerApellido: data.primerApellido,
      segundoApellido: data.segundoApellido,
      curp: data.curp,
      rfc: data.rfc,
    },
    Domicilio: {
      cp: data.cp,
      calle: data.calle,
      numExt: data.numExt,
      numInt: data.numInt,
      estado: data.estado,
      municipio: data.municipio,
      colonia: data.colonia,
    },
  };
};

export const helperSubmit2 = (user: FormInterface, infoUser: ResponseUsersService) => {
  return {
    id: infoUser.id,
    name: `${user.nombre} ${user.primerApellido} ${user.segundoApellido}`,
    username: user.nombre,
    email: infoUser.email,
    address: {
      street: user.calle,
      suite: user.numExt,
      city: user.estado,
      zipcode: user.cp,
      geo: {
        lat: infoUser.address.geo.lat ? infoUser.address.geo.lat : "",
        lng: infoUser.address.geo.lng ? infoUser.address.geo.lng : "",
      },
    },
    phone: infoUser.phone,
    website: infoUser.website,
    company: {
      name: infoUser.company.name,
      catchPhrase: infoUser.company.catchPhrase,
      bs: infoUser.company.bs,
    },
  };
};
