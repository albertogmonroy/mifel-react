import { createSlice } from "@reduxjs/toolkit";
import { ResponseUsersService } from "../../interface/services/getUsersServiec";
interface User {
  users: ResponseUsersService[];
  userSelect: ResponseUsersService | null;
  openDialgo: boolean;
  openMap: boolean;
}

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userSelect: null,
    openDialgo: false,
    openMap: false,
  } as User,
  reducers: {
    onSetUsers: (state, { payload }) => {
      state.users = payload;
    },
    onSelectUser: (state, { payload }) => {
      state.userSelect = payload;
    },
    onChangeOpenDialog: (state, { payload }) => {
      state.openDialgo = payload;
    },
    onUpdateUser: (state, { payload }) => {
      state.users = state.users.map((user) =>
        user.id === payload.id ? payload : user
      );
    },
    onDeleteUser: (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload);
    },
    onOpenMap: (state, { payload }) => {
      state.openMap = payload;
    },
  },
});

export const {
  onChangeOpenDialog,
  onDeleteUser,
  onOpenMap,
  onSelectUser,
  onSetUsers,
  onUpdateUser,
} = usersSlice.actions;
