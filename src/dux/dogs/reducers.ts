import { ActionType, types } from "./actionCreators";
import { DogsStateType } from "./types";

const initialState: DogsStateType = {
  error: null,
  isFetching: false,
  imageUrl: "",
};

const state = (state = initialState, action: ActionType): DogsStateType => {
  switch (action.type) {
    case types.IS_FETCHING_DOGS: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case types.FETCH_DOGS_SUCCESS: {
      const { payload: imageUrl } = action;
      return {
        ...state,
        imageUrl,
        isFetching: false,
      };
    }

    case types.FETCH_DOGS_ERROR: {
      const { error } = action;
      return {
        ...state,
        error,
        isFetching: false,
      };
    }

    default:
      return state;
  }
};

export default state;
