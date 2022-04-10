
import { Hobby } from "../../types";
import { ADD_HOBBY, DELETE_HOBBY, SET_HOBBIES } from "./hobbiesActionTypes";

export interface IHobbyState {
  readonly hobbies: Hobby[];
}
const intialHobbyState: IHobbyState = {
  hobbies: []
};

export const hobbiesReducer = (
  state = intialHobbyState,
  action: any
): IHobbyState => {
  console.log(action.payload);
  switch (action.type) {
    case SET_HOBBIES: {
      return { ...state, hobbies: [...action.payload.hobbies] };
    }

    case ADD_HOBBY: {
      return { ...state, hobbies: [...state.hobbies, action.payload.hobby.data] };
    }

    case DELETE_HOBBY: {
      return {
        ...state,
        hobbies: state.hobbies.filter(
          hobby => hobby._id !== action.payload.hobbyId
        )
      };
    }

    default:
      return state;
  }
};