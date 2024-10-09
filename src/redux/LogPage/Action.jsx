import axios from "axios";
import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
} from "./ActionType";

export const Signup = (data) => async (dispatch) => {
	try {
		dispatch({ type: SIGNUP_REQUEST });
		const res = await axios.post(
			`https://nykaa-e3286-default-rtdb.firebaseio.com/user/register.json`,
			data
		);
		dispatch({
			type: SIGNUP_SUCCESS,
			payload: { message: res.data.message || "Signup successful!" },
		});
	} catch (e) {
		console.error("Signup error:", e);
		dispatch({ type: SIGNUP_FAILURE, payload: e.message });
	}
};

export const login = (data) => async (dispatch) => {
	try {
		dispatch({ type: LOGIN_REQUEST });
		const res = await axios.post(
			"https://nykaa-e3286-default-rtdb.firebaseio.com/user/login.json",
			data
		);
		console.log("Login response:", res.data);
		dispatch({ type: LOGIN_SUCCESS, payload: res.data });
	} catch (e) {
		console.error("Login error:", e);
		dispatch({ type: LOGIN_FAILURE, payload: e.message });
	}
};
