import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

const store = createStore(
	rootReducer,
	applyMiddleware(
		///add any new middlewares here
		thunkMiddleware,
		loggerMiddleware
	)
);

export default store;
