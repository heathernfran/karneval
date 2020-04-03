import axios from "axios";
import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import * as actionCreators from "./actionCreators";
import { DogsStateType } from "./types";

type ActionReturnType = ThunkAction<
  void,
  DogsStateType,
  unknown,
  Action<string>
>;

const fetchDogs = (): ActionReturnType => async (dispatch: Dispatch) => {
  dispatch(actionCreators.isFetchingDogs());

  try {
    const { data } = await axios.get("https://dog.ceo/api/breeds/image/random");

    return dispatch(actionCreators.fetchDogsSuccess(data.message));
  } catch (error) {
    return dispatch(actionCreators.fetchDogsError(error));
  }
};

export { fetchDogs };
