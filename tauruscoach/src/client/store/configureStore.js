import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducers/userReducer";
import cartReducer from "../reducers/cartReducer";
import countReducer from "../reducers/countReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      cart: cartReducer,
      count: countReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configureStore;
