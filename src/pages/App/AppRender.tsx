import { Button } from "primereact/button";
import { PopUpRegister } from "../../components/form/PopUpRegister";
import { TableUsers } from "../../components/table/TableUsers";
import { useUsersStore } from "../../hooks/users/usersStore";
import { GoogleMaps } from "../../components/googleMaps/GoogleMaps";

export const AppRender = () => {
  const { handleChangeModal } = useUsersStore();
  return (
    <div>
      <div className="flex w-full flex-wrap justify-content-center mb-2">
        <Button
          label="Nuevo Usuario"
          icon="pi pi-plus"
          type="button"
          onClick={() => handleChangeModal(true)}
        />
      </div>
      <PopUpRegister />
      <TableUsers />
      <GoogleMaps />
    </div>
  );
};
