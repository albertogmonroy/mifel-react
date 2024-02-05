import { RequestPostUser } from "../../interface/services/postUser";
import { v4 as uuidv4 } from "uuid";

export const addUser = (user: RequestPostUser) => {
  return {
    id: String(uuidv4().split("-")[0]),
    name: `${user.infoUsuario.nombre} ${user.infoUsuario.primerApellido} ${user.infoUsuario.segundoApellido}`,
    username: user.infoUsuario.nombre,
    email: `${user.infoUsuario.nombre}@mifel.com`,
    address: {
      street: user.Domicilio.calle,
      suite: user.Domicilio.numExt,
      city: user.Domicilio.estado,
      zipcode: user.Domicilio.cp,
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "1234567890",
    website: `${user.infoUsuario.rfc}.com`,
    company: {
      name: "Mifel",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };
};
