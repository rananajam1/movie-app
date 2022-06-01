import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { forbiddenWordsMiddleware } from "./redux/middlewares";
import rootReducer from "./redux/reducers";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;
