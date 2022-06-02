import { fetchWrapper } from "../../../helpers/fetch-wrapper";
import {
  FETCH_ALL_MOVIES_FAILURE,
  FETCH_ALL_MOVIES_REQUEST,
  FETCH_ALL_MOVIES_SUCCESS,
} from "../../constants/action-types";

export const getAllMovies = () => async (dispatch) => {
  dispatch({
    type: FETCH_ALL_MOVIES_REQUEST,
  });

  try {
    const { results } = await fetchWrapper.get("/list/1");
    dispatch({ type: FETCH_ALL_MOVIES_SUCCESS, data: results });
  } catch (error) {
    dispatch({
      type: FETCH_ALL_MOVIES_FAILURE,
      error,
    });
  }
};
