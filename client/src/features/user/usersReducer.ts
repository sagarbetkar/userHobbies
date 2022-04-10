import { SET_USERS, ADD_USER } from "./usersActionTypes";
import { User } from "../../types";

export interface IUserState {
  readonly users: User[];
}
const intialUserState: IUserState = {
  users: []
};
export const usersReducer = (
  state = intialUserState,
  action: any
): IUserState => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: [...action.payload.users.data] };
    }

    case ADD_USER: {
      return { ...state, users: [...state.users, action.payload.user.data] };
    }

    default:
      return state;
  }
};