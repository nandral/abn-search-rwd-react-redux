import {
  SEARCH_BY_NAME_COMPLETED,
  SEARCH_BY_ABN_COMPLETED,
  SEARCH_ERROR,
  VIEW_ABN_COMPLETED,
  PROCESSING_REQUEST
} from "actions/types";
const INITIAL_STATE = {
  error: undefined,
  results: [],
  business: undefined,
  loading: false
};
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_BY_NAME_COMPLETED:
      return {
        error: undefined,
        results: [...action.payload]
      };
    case SEARCH_BY_ABN_COMPLETED:
      return {
        error: undefined,
        results: [action.payload]
      };
    case SEARCH_ERROR:
      return {
        error: action.payload,
        results: []
      };
    case VIEW_ABN_COMPLETED:
      return {
        ...state,
        error: undefined,
        business: action.payload
      };
    case PROCESSING_REQUEST:
      return {
        error: undefined,
        results: [],
        loading: action.payload
      };
    default:
      return state;
  }
}
