import axios from "axios";
import { AddressLoading, AddressSuccess, AddressFailure } from "./ActionType";

export const AddAddress = (userid, data) => async (dispatch) => {
	try {
		dispatch({ type: AddressLoading });
		const res = await axios.post(
			`https://nykaa-e3286-default-rtdb.firebaseio.com/user.json`,
			data
		);
		dispatch({ type: AddressSuccess, payload: res.data });
	} catch (err) {
		console.error("Error adding address:", err);
		dispatch({ type: AddressFailure, payload: err.message });
	}
};

export const getAddress = (userid) => async (dispatch) => {
	try {
		dispatch({ type: AddressLoading });
		const res = await axios.get(
			`https://nykaa-e3286-default-rtdb.firebaseio.com/user/${userid}.json`
		);
		dispatch({ type: AddressSuccess, payload: res.data });
	} catch (err) {
		console.error("Error fetching address:", err);
		dispatch({ type: AddressFailure, payload: err.message });
	}
};
