import { User } from "../../types";

// Users
export const ADD_USER = "ADD_USER";
export const SET_USERS = "SET_USERS";

interface GetUsersAction {
  type: typeof SET_USERS;
  payload: {
    users: User[];
  };
}

interface CreateUserAction {
  type: typeof ADD_USER;
  payload: {
    user: User;
  };
}

export type UsersActionTypes = GetUsersAction | CreateUserAction;