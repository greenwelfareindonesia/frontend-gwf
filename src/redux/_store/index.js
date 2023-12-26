import { combineReducers } from "redux";
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import article from "../article/reducer";

const reducer = combineReducers({
  article,
});

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
