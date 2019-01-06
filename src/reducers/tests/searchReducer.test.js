import searchReducer from "reducers/searchReducer";
import {
  SEARCH_BY_NAME_COMPLETED,
  SEARCH_BY_ABN_COMPLETED,
  SEARCH_ERROR,
  VIEW_ABN_COMPLETED,
  PROCESSING_REQUEST
} from "actions/types";

describe("Search reducer", () => {
  const INITIAL_STATE = {
    error: undefined,
    results: [],
    business: undefined,
    loading: false
  };

  it("handles action of type PROCESSING_REQUEST", () => {
    const action = {
      type: PROCESSING_REQUEST,
      payload: true
    };
    expect(INITIAL_STATE.loading).toEqual(false);
    const newState = searchReducer(INITIAL_STATE, action);
    expect(newState.loading).toEqual(true);
  });

  it("handles action of type SEARCH_BY_NAME_COMPLETED", () => {
    const action = {
      type: SEARCH_BY_NAME_COMPLETED,
      payload: [
        {
          abn: "32614059737",
          name: "Trade Ledger",
          status: "Active",
          location: "2000 NSW"
        }
      ]
    };
    expect(INITIAL_STATE.results.length).toEqual(0);
    const newState = searchReducer(INITIAL_STATE, action);
    expect(newState.results.length).toEqual(1);
  });

  it("handles action of type SEARCH_BY_ABN_COMPLETED", () => {
    const action = {
      type: SEARCH_BY_ABN_COMPLETED,
      payload: {
        abn: "32614059737",
        name: "Trade Ledger",
        status: "Active",
        location: "2000 NSW"
      }
    };
    expect(INITIAL_STATE.results.length).toEqual(0);
    const newState = searchReducer(INITIAL_STATE, action);
    expect(newState.results.length).toEqual(1);
  });

  it("handles action of type SEARCH_ERROR", () => {
    const action = {
      type: SEARCH_ERROR,
      payload: "INVALID_ABN"
    };
    expect(INITIAL_STATE.error).toEqual(undefined);
    const newState = searchReducer(INITIAL_STATE, action);
    expect(newState.error).toEqual("INVALID_ABN");
  });

  it("handles action of type VIEW_ABN_COMPLETED", () => {
    const action = {
      type: VIEW_ABN_COMPLETED,
      payload: {
        abn: 1234
      }
    };
    expect(INITIAL_STATE.business).toEqual(undefined);
    const newState = searchReducer(INITIAL_STATE, action);
    expect(newState.business.abn).toEqual(1234);
  });
});
