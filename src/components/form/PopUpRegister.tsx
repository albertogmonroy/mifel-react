import { Dialog } from "primereact/dialog";
import { useUsersStore } from "../../hooks/users/usersStore";
import { FormUsers } from "./FormUsers";

export const PopUpRegister = () => {
  const { openDialgo, handleChangeModal, handleSelectUser } =
    useUsersStore();


  return (
    <Dialog
      visible={openDialgo}
      style={{ width: "70vw" }}
      closeIcon="pi pi-times"
      header={
        <div className="col-12 -mb-4">
          <label htmlFor="titulo">
            <h1 className="text-3xl text-center">
              <strong>Registro de Usuarios</strong>
            </h1>
          </label>
        </div>
      }
      closeOnEscape
      closable={false}
      onHide={() => {
        handleChangeModal(false);
        handleSelectUser(null);
      }}
    >
      <div className="w-full mt-2">
        <FormUsers />
      </div>
    </Dialog>
  );
};
