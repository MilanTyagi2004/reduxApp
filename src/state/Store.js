import {thunk} from "redux-thunk";
import { applyMiddleware,createStore} from "redux";
import reducers from "./Reducers"

export const store = createStore(reducers,{},applyMiddleware(thunk))