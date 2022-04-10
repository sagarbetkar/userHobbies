import { Hobby } from "../../types";

export const ADD_HOBBY = "ADD_HOBBY";
export const DELETE_HOBBY = "DELETE_HOBBY";
export const SET_HOBBIES = "SET_HOBBBIES";

interface FetchHobbiesAction {
  type: typeof SET_HOBBIES;
  payload: { hobbies: Hobby[] };
}

interface CreateHobbieAction {
  type: typeof ADD_HOBBY;
  payload: {
    hobby: Hobby;
  };
}

interface RemoveHobbieAction {
    type: typeof DELETE_HOBBY;
    payload: {
        hobbyId: string;
    };
}

export type HobbiesActionTypes =
  | FetchHobbiesAction
  | CreateHobbieAction
  | RemoveHobbieAction;