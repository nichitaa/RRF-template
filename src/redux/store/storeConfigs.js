import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { rootReducer } from "../reducers/rootReducer";

export const storeConfigs = () => {
	const store = createStore(
		combineReducers({
			forms: rootReducer,
		}),
		applyMiddleware(thunk, logger)
	);
	return store;
};
