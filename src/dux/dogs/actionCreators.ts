export enum types {
  FETCH_DOGS_ERROR = "dogs/FETCH_DOGS_ERROR",
  FETCH_DOGS_SUCCESS = "dogs/FETCH_DOGS_SUCCESS",
  IS_FETCHING_DOGS = "dogs/IS_FETCHING_DOGS",
}

export interface ActionType {
  error?: string;
  payload?: string;
  type: string;
}

const fetchDogsError = (error: string): ActionType => ({
  type: types.FETCH_DOGS_ERROR,
  error,
});

const fetchDogsSuccess = (payload: string): ActionType => ({
  type: types.FETCH_DOGS_SUCCESS,
  payload,
});

const isFetchingDogs = (): ActionType => ({
  type: types.IS_FETCHING_DOGS,
});

export { fetchDogsError, fetchDogsSuccess, isFetchingDogs };
