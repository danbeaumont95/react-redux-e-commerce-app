import { combineReducers } from "redux";
import productsReducer from "./Products/productsReducer";

const rootReducer = combineReducers({
  shop: productsReducer,
});

export default rootReducer;
