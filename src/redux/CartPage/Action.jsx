// import axios from "axios";
// import {
// 	cartDataLoading,
// 	cartDataSuccess,
// 	cartDataError,
// 	deleteLoading,
// 	deleteSuccess,
// 	deleteError,
// 	addToBagLoading,
// 	addToBagSuccess,
// 	addToBagError,
// } from "./ActionType";

// export const getData = (userid) => async (dispatch) => {
// 	try {
// 		dispatch({ type: cartDataLoading });
// 		const res = await axios.get(
// 			`https://fair-pear-salmon-suit.cyclic.app/cart/${userid}`
// 		);
// 		dispatch({ type: cartDataSuccess, payload: res.data.cartdata });
// 	} catch (err) {
// 		console.error("Error fetching cart data:", err);
// 		dispatch({ type: cartDataError, payload: err.message });
// 	}
// };

// export const addToBag = (userid, data) => async (dispatch) => {
// 	try {
// 		dispatch({ type: addToBagLoading });
// 		const res = await axios.post(
// 			`https://fair-pear-salmon-suit.cyclic.app/cart/${userid}`,
// 			data
// 		);
// 		dispatch({ type: addToBagSuccess, payload: res.data });
// 	} catch (err) {
// 		console.error("Error adding to bag:", err);
// 		dispatch({ type: addToBagError, payload: err.message });
// 	}
// };

// export const DeleteData = (userid, index) => async (dispatch) => {
// 	try {
// 		dispatch({ type: deleteLoading });
// 		const res = await axios.delete(
// 			`https://nykaa-e3286-default-rtdb.firebaseio.com/payment/${userid}/${index}.json`
// 		);
// 		dispatch({ type: deleteSuccess, payload: res.data });
// 	} catch (err) {
// 		console.error("Error deleting data:", err);
// 		dispatch({ type: deleteError, payload: err.message });
// 	}
// };

// export const paymentSuccess = (userid) => async (dispatch) => {
// 	try {
// 		dispatch({ type: deleteLoading });
// 		const res = await axios.patch(
// 			`https://nykaa-e3286-default-rtdb.firebaseio.com/payment/${userid}.json`
// 		);
// 		dispatch({ type: deleteSuccess, payload: res.data.message });
// 	} catch (err) {
// 		console.error("Error during payment success:", err);
// 		dispatch({ type: deleteError, payload: err.message });
// 	}
// };
