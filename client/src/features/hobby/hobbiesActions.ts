import {
  ADD_HOBBY,
  DELETE_HOBBY,
  SET_HOBBIES,
  HobbiesActionTypes
} from "./hobbiesActionTypes";
import { Hobby } from "../../types";
import { ThunkDispatch } from "redux-thunk";
import axios from "axios";
import { AnyAction } from "redux";


// Action Creators
export const setHobbies = (hobbies: Hobby[]): HobbiesActionTypes => ({
  type: SET_HOBBIES,
  payload: {
    hobbies: hobbies
  }
});

export const addHobby = (hobby: Hobby): HobbiesActionTypes => ({
  type: ADD_HOBBY,
  payload: {
    hobby: hobby
  }
});

export const removeHobby = (id: string): HobbiesActionTypes => ({
  type: DELETE_HOBBY,
  payload: {
    hobbyId: id
  }
});

// Thunk Actions
export const createHobby = (hobby: Hobby, userId: string) => ({
  type: "API_REQUEST",
  payload: {
    url: `hobbies/${userId}`,
    method: "POST",
    data: hobby,
    onSuccess: addHobby
  }
});

export const deleteHobby = (id: string): any => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
): Promise<void> => {
  await axios.delete(`http://localhost:4000/api/v1/hobbies/${id}`);
  dispatch(removeHobby(id));
};