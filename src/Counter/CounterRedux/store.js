import { createStore } from "redux";
import reducerRedux from "./reducer";

const store = createStore(reducerRedux);

export default store;