import { createStore, combineReducers } from "redux";
import { productReducer } from "../reducers/productReducer";

export const configStore = () => {
  const myStore = createStore(
    combineReducers({
      productReducer,
    }),
    window.REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return myStore;
};
