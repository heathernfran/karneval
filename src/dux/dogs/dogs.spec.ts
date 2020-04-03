import configureStore from "redux-mock-store";

import reducer, { actionCreators, actions, selectors, types } from "./index";

const mockStore = configureStore([]);

const mockInitialState = {
  error: null,
  isFetching: false,
  imageUrl: "",
};

//
// ─── ACTION CREATORS ────────────────────────────────────────────────────────────
//

describe("Dogs actions", () => {
  it("creates an action for isFetchingDogs()", () => {
    const expectedAction = { type: types.IS_FETCHING_DOGS };

    expect(actionCreators.isFetchingDogs()).toEqual(expectedAction);
  });

  it("creates an action for fetchDogsSuccess()", () => {
    const expectedAction = {
      type: types.FETCH_DOGS_SUCCESS,
      payload: "payload",
    };

    expect(actionCreators.fetchDogsSuccess("payload")).toEqual(expectedAction);
  });

  it("creates an action for fetchDogsError()", () => {
    const expectedAction = {
      type: types.FETCH_DOGS_ERROR,
      error: "error",
    };

    expect(actionCreators.fetchDogsError("error")).toEqual(expectedAction);
  });
});

//
// ─── ACTIONS ────────────────────────────────────────────────────────────────────
//

describe("Dogs thunks", () => {
  it("dispatches isFetchingDogs()", () => {
    const store = mockStore({});

    store.dispatch(actionCreators.isFetchingDogs());

    const action = store.getActions();
    const expectedPayload = { type: types.IS_FETCHING_DOGS };

    expect(action).toEqual([expectedPayload]);
  });

  it("dispatches fetchDogsSuccess()", () => {
    const store = mockStore({});

    const payload = "payload";

    store.dispatch(actionCreators.fetchDogsSuccess(payload));

    const action = store.getActions();
    const expectedPayload = { type: types.FETCH_DOGS_SUCCESS, payload };

    expect(action).toEqual([expectedPayload]);
  });

  it("dispatches fetchDogsError()", () => {
    const store = mockStore({});

    const error = "Error";

    store.dispatch(actionCreators.fetchDogsError(error));

    const action = store.getActions();
    const expectedPayload = { type: types.FETCH_DOGS_ERROR, error };

    expect(action).toEqual([expectedPayload]);
  });
});

//
// ─── REDUCERS ───────────────────────────────────────────────────────────────────
//

describe("Dogs reducer", () => {
  it("returns the initial state", () => {
    expect(reducer(undefined, { type: "type" })).toEqual(mockInitialState);
  });

  it("returns the state from IS_FETCHING_DOGS", () => {
    const action = { type: types.IS_FETCHING_DOGS };

    expect(reducer(mockInitialState, action)).toEqual({
      ...mockInitialState,
      isFetching: true,
    });
  });

  it("returns the state from FETCH_DOGS_SUCCESS", () => {
    const action = { type: types.FETCH_DOGS_SUCCESS, payload: "Success" };

    expect(reducer(mockInitialState, action)).toEqual({
      ...mockInitialState,
      imageUrl: "Success",
    });
  });

  it("returns the state from FETCH_DOGS_ERROR", () => {
    const action = { type: types.FETCH_DOGS_ERROR, error: "Error" };

    expect(reducer(mockInitialState, action)).toEqual({
      ...mockInitialState,
      error: "Error",
    });
  });
});

//
// ─── SELECTORS ──────────────────────────────────────────────────────────────────
//

describe("Dogs selectors", () => {
  it("returns error from getError()", () => {
    const mockState = {
      dogs: {
        ...mockInitialState,
        error: "Error",
      },
    };

    expect(selectors.getError(mockState)).toEqual("Error");
  });

  it("returns imageUrl from getImageUrl()", () => {
    const imageUrl = "https://via.placeholder.com/150";

    const mockState = {
      dogs: {
        ...mockInitialState,
        imageUrl,
      },
    };

    expect(selectors.getImageUrl(mockState)).toBe(imageUrl);
  });

  it("returns isFetching from getIsFetching()", () => {
    const mockState = {
      dogs: {
        ...mockInitialState,
        isFetching: true,
      },
    };

    expect(selectors.getIsFetching(mockState)).toBe(true);
  });
});
