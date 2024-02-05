import { FormProvider, useForm } from "react-hook-form";
import { InputText } from "../general/InputText";
import { Button } from "primereact/button";
import { RegexAlphaNum, RegexCurp, RegexRFC } from "../../helpers/Regex";
import { FormInterface } from "../../interface/form/formInterface";
import { useUsersStore } from "../../hooks/users/usersStore";
import { useEffect } from "react";
import { helperSubmit, helperSubmit2 } from "./helperSubmit";
import { RequestPostUser } from "../../interface/services/postUser";

export const FormUsers = () => {
  const {
    userSelect,
    openDialgo,
    handleChangeModal,
    saveUser,
    handleUpdateUser,
    handleSelectUser,
  } = useUsersStore();
  /* Libreria para el mandejo del formulario */
  const methods = useForm<FormInterface>();

  /* Función para hacer el guardado del formulario */
  const onSubmit = (data: FormInterface) => {
    if (userSelect) {
      const pUser = helperSubmit2(data, userSelect);
      handleUpdateUser(pUser);
    } else {
      const pUser = helperSubmit(data);
      saveUser(pUser as RequestPostUser);
    }
  };

  const handleClose = (close: boolean) => {
    if (close) {
      handleChangeModal(false);
    }
    methods.reset({
      nombre: "",
      primerApellido: "",
      segundoApellido: "",
      curp: "",
      rfc: "",
      cp: "",
      calle: "",
      numExt: "",
      numInt: "",
      estado: "",
      municipio: "",
      colonia: "",
    });
  };
  useEffect(() => {
    if (!openDialgo) {
      methods.reset({
        nombre: "",
        primerApellido: "",
        segundoApellido: "",
        curp: "",
        rfc: "",
        cp: "",
        calle: "",
        numExt: "",
        numInt: "",
        estado: "",
        municipio: "",
        colonia: "",
      });
      handleSelectUser(null);
    }/* eslint-disable-next-line */
  }, [openDialgo]);
  useEffect(() => {
    if (userSelect) {
      methods.setValue("nombre", userSelect?.name);
      methods.setValue("primerApellido", userSelect?.username);
      methods.setValue("segundoApellido", userSelect?.email);
      methods.setValue("curp", userSelect?.website);
      methods.setValue("rfc", userSelect?.website);
      methods.setValue("cp", userSelect?.address.zipcode);
      methods.setValue("calle", userSelect?.address.street);
      methods.setValue("numExt", userSelect?.address.suite);
      methods.setValue("numInt", userSelect?.address.suite);
      methods.setValue("estado", userSelect?.address.city);
      methods.setValue("municipio", userSelect?.address.city);
      methods.setValue("colonia", userSelect?.address.city);
    } /* eslint-disable-next-line */
  }, [userSelect]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="grid col-12 p-fluid card shadow-6"
      >
        <div className="col-4 mb-3 mt-2">
          <InputText
            name="nombre"
            label="Nombre"
            isrequired
            keyfilter={RegexAlphaNum}
            rules={{
              required: {
                value: true,
                message: "El nombre es requerido",
              },
              pattern: {
                value: RegexAlphaNum,
                message: "El nombre solo puede contener letras",
              },
            }}
          />
        </div>
        <div className="col-4 mb-3 mt-2">
          <InputText
            name="primerApellido"
            label="Primer Apellido"
            isrequired
            keyfilter={RegexAlphaNum}
            rules={{
              required: {
                value: true,
                message: "El primer apellido es requerido",
              },
              pattern: {
                value: RegexAlphaNum,
                message: "El apellido solo puede contener letras",
              },
            }}
          />
        </div>
        <div className="col-4 mb-3 mt-2">
          <InputText
            name="segundoApellido"
            label="Segundo Apellido"
            isrequired
            keyfilter={RegexAlphaNum}
            rules={{
              required: {
                value: true,
                message: "El segundo apellido es requerido",
              },
              pattern: {
                value: RegexAlphaNum,
                message: "El apellido solo puede contener letras",
              },
            }}
          />
        </div>
        <div className="col-6 mb-3">
          <InputText
            name="curp"
            label="CURP"
            isrequired
            keyfilter="alphanum"
            rules={{
              required: {
                value: true,
                message: "El CURP es requerido",
              },
              pattern: {
                value: RegexCurp,
                message: "El CURP no es valido",
              },
            }}
          />
        </div>
        <div className="col-6 mb-3">
          <InputText
            name="rfc"
            label="RFC (con homoclave) "
            isrequired
            keyfilter="alphanum"
            rules={{
              required: {
                value: true,
                message: "El RFC es requerido",
              },
              pattern: {
                value: RegexRFC,
                message: "El RFC no es valido",
              },
            }}
          />
        </div>
        <div className="col-3 mb-3">
          <InputText
            name="cp"
            maxLength={5}
            label="Código Postal"
            keyfilter="pint"
            isrequired
            rules={{
              required: {
                value: true,
                message: "El código postal es requerido",
              },
              minLength: {
                value: 5,
                message: "El código postal debe tener 5 digitos",
              },
              maxLength: {
                value: 5,
                message: "El código postal debe tener 5 digitos",
              },
            }}
          />
        </div>
        <div className="col-9 mb-3">
          <InputText
            name="calle"
            label="Calle"
            keyfilter={RegexAlphaNum}
            isrequired
            rules={{
              required: {
                value: true,
                message: "La calle es requerida",
              },
            }}
          />
        </div>
        <div className="col-4 mb-3">
          <InputText
            name="numExt"
            label="Número Exterior"
            keyfilter="pint"
            maxLength={5}
            isrequired
            rules={{
              required: {
                value: true,
                message: "El número exterior es requerido",
              },
              minLength: {
                value: 5,
                message: "El número exterior debe tener 5 digitos",
              },
              maxLength: {
                value: 5,
                message: "El número exterior debe tener 5 digitos",
              },
            }}
          />
        </div>
        <div className="col-4 mb-3">
          <InputText
            name="numInt"
            label="Número Interior"
            keyfilter="pint"
            maxLength={10}
          />
        </div>
        <div className="col-4 mb-3">
          <InputText
            name="estado"
            label="Estado"
            keyfilter={RegexAlphaNum}
            isrequired
            rules={{
              required: {
                value: true,
                message: "El estado es requerido",
              },
            }}
          />
        </div>
        <div className="col-6 mb-3">
          <InputText
            name="municipio"
            label="Delegación/Municipio"
            keyfilter={RegexAlphaNum}
            isrequired
            rules={{
              required: {
                value: true,
                message: "El municipio es requerido",
              },
            }}
          />
        </div>
        <div className="col-6 mb-3">
          <InputText
            name="colonia"
            label="Colonia"
            keyfilter={RegexAlphaNum}
            isrequired
            rules={{
              required: {
                value: true,
                message: "La colonia es requerida",
              },
            }}
          />
        </div>
        <div className="flex w-full flex-wrap justify-content-center ">
          <Button
            type="button"
            label="Cancelar"
            className="w-8rem mr-2"
            onClick={() => handleClose(true)}
            style={{
              backgroundColor: "#d63864",
              color: "white",
              border: "1px solid #d63864",
              width: "2em",
            }}
          />
          <Button
            type="submit"
            label={userSelect ? "Actualizar" : "Guardar"}
            className="w-8rem"
          />
        </div>
      </form>
    </FormProvider>
  );
};
