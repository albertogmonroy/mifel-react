import { alertSwal } from "../../helpers/helpers";
import { ResponseUsersService } from "../../interface/services/getUsersServiec";
import { RequestPostUser } from "../../interface/services/postUser";
import {
  getUsersService,
  postUsersService,
} from "../../services/users/usersService";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  onChangeOpenDialog,
  onDeleteUser,
  onOpenMap,
  onSelectUser,
  onSetUsers,
  onUpdateUser,
} from "../../store/users/usersSlice";
import { addUser } from "./helperAddUser";

export const useUsersStore = () => {
  const { users, openDialgo, userSelect, openMap } = useAppSelector(
    (state) => state.users
  );
  const dispatch = useAppDispatch();
  const getUsers = () => {
    getUsersService()
      .then(({ data }) => {
        dispatch(onSetUsers(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const saveUser = (pUser: RequestPostUser) => {
    postUsersService(pUser)
      .then(() => {
        alertSwal("¡Correcto!", "Usuario guardado correctamente", "success");
        handleChangeModal(false);
        const newUSer = addUser(pUser);
        dispatch(onSetUsers([...users, newUSer]));
      })
      .catch((error) => {
        console.log(error);
        alertSwal("¡Error!", "Error al guardar el usuario", "error");
      });
  };

  const handleChangeModal = (pParam: boolean) =>
    dispatch(onChangeOpenDialog(pParam));

  const handleDeleteUser = (pId: number) => {
    alertSwal(
      "¡Atención!",
      "¿Está seguro que desea eliminar el usuario?",
      "warning",
      "Si, eliminar",
      true,
      () => {
        dispatch(onDeleteUser(pId));
        alertSwal("¡Correcto!", "Usuario eliminado correctamente", "success");
      },
      () => {}
    );
  };

  const handleSelectUser = (pUser: ResponseUsersService | null) => {
    dispatch(onSelectUser(pUser));
  };

  const handleUpdateUser = (pUser: ResponseUsersService) => {
    dispatch(onUpdateUser(pUser));
    alertSwal("Correcto", "Usuario actualizado correctamente", "success");
    handleSelectUser(null);
    handleChangeModal(false);
  };

  const setOpenMap = (pMap: boolean) => {
    dispatch(onOpenMap(pMap));
  };

  return {
    openDialgo,
    users,
    userSelect,
    openMap,
    getUsers,
    handleChangeModal,
    handleDeleteUser,
    handleSelectUser,
    handleUpdateUser,
    saveUser,
    setOpenMap,
  };
};
