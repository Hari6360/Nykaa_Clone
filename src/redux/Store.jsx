import {
	legacy_createStore,
	applyMiddleware,
	combineReducers,
	compose,
} from "redux";
import { AuthenticationReducer } from "./LogPage/Reducer";
// import { CartReducer } from "./CartPage/Reducer";
import { AddressReducer } from "./AddressPage/Reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
	AuthenticationReducer,
	// CartReducer,
	AddressReducer,
});

const composeEnhancers = compose;
export const store = legacy_createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);
