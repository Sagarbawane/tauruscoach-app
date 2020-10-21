import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducers/userReducer";
import cartReducer from "../reducers/cartReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      cart: cartReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configureStore;
