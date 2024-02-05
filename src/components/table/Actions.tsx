import { Button } from "primereact/button";
import { ResponseUsersService } from "../../interface/services/getUsersServiec";
import { useUsersStore } from "../../hooks/users/usersStore";

export const Actions = (props: ResponseUsersService) => {
  const { handleDeleteUser, handleSelectUser, handleChangeModal, setOpenMap } =
    useUsersStore();
  const deleteUser = () => {
    handleDeleteUser(props.id);
  };
  const editUser = () => {
    handleSelectUser(props);
    handleChangeModal(true);
  };
  const viewMap = () => {
    handleSelectUser(props);
    setOpenMap(true);
  };
  return (
    <>
      <Button
        icon="pi pi-pencil"
        style={{
          marginRight: ".5em",
          color: "white",
          backgroundColor: "#429488",
          border: "1px solid #429488",
          borderRadius: "50%",
          width: "2em",
        }}
        type="button"
        onClick={editUser}
      />
      <Button
        icon="pi pi-trash"
        style={{
          backgroundColor: "#d63864",
          color: "white",
          border: "1px solid #d63864",
          borderRadius: "50%",
          width: "2em",
        }}
        type="button"
        onClick={deleteUser}
      />
      <Button
        icon="pi pi-map-marker"
        style={{
          backgroundColor: "#f0ad4e",
          color: "white",
          border: "1px solid #f0ad4e",
          borderRadius: "50%",
          width: "2em",
        }}
        className="ml-2"
        type="button"
        onClick={() => viewMap()}
      />
    </>
  );
};
