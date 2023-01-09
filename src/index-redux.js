const { configureStore, combineReducers, applyMiddleware } = require("@reduxjs/toolkit");
const reduxLogger = require("redux-logger");
const reduxThunk = require("redux-thunk").default; 

const logger =  reduxLogger.createLogger( () => console.log("what"))

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "second redux action",
  };
}

const initialState = {
  numberOfCakes: 20,
  numberOfIceCream: 30,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    default:
      return state;
  }
};

const cakeInitialState = {
  numberOfCakes: 20,
};
const iceCreamInitialState = {
  numberOfIceCream: 30,
};

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream : iceCreamReducer,
})
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
console.log("Initial state: ", store.getState());
 const cleanStore = store.subscribe(() =>{/*console.log("Updated state: ", store.getState())*/});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
cleanStore();
