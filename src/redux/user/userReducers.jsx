import {
  fetchDataRequest,
  fetchDataFailure,
  fetchDataSuccess,
} from "./userActions";

import axios from "axios";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, users: action.payload, error: "" };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    const url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(url)
      .then((response) => {
        const users = response.data;
        dispatch(fetchDataSuccess(users));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchDataFailure(errMsg));
      });
  };
};

export default userReducer;
