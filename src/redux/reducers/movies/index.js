import {
  FETCH_ALL_MOVIES_FAILURE,
  FETCH_ALL_MOVIES_REQUEST,
  FETCH_ALL_MOVIES_SUCCESS,
} from "../../constants/action-types";

const initialState = {
  isFetching: false,
  data: [],
  error: null,
};

function movies(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_MOVIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };
    case FETCH_ALL_MOVIES_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };

    default:
      return state;
  }
}

export default movies;
