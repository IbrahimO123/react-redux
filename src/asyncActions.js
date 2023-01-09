const { configureStore } = require("@reduxjs/toolkit");
const reduxLogger = require("redux-logger");
const thunk = require("redux-thunk").default;
const axios = require("axios");

const logger = reduxLogger.createLogger(() => console.log("what"));

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

const fetchDataSuccess = (users) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: users,
  };
};

const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
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

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchDataRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchDataSuccess(users));
      })
      .catch((error) => dispatch(fetchDataFailure(error.message)));
  };
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
store.subscribe(() => {
   console.log(store.getState());
});
store.dispatch(fetchUsers());
// store.dispatch(fetchDataRequest());
// store.dispatch(fetchDataSuccess(["body", "laughing", "cooking"]));
// store.dispatch(fetchDataFailure("no url specified"));
