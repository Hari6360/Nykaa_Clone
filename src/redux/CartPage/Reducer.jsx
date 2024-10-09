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

// const initialState = {
// 	loading: false,
// 	data: [],
// 	error: false,
// 	Totalprice: 0,
// 	Totaldiscountprice: 0,
// 	ItemCount: 0,
// 	deletemsg: "",
// 	addBagLoading: false,
// 	addBagSuccess: "",
// 	addBagError: "",
// };

// export const CartReducer = (state = initialState, { type, payload }) => {
// 	switch (type) {
// 		case cartDataLoading:
// 			return {
// 				...state,
// 				loading: true,
// 			};

// 		case cartDataSuccess: {
// 			const beforeDiscountPrice = payload.reduce(
// 				(acc, item) => acc + item.price,
// 				0
// 			);
// 			const atDiscountPrice = payload.reduce(
// 				(acc, item) => acc + item.discountedprice,
// 				0
// 			);
// 			return {
// 				...state,
// 				loading: false,
// 				data: payload,
// 				error: false,
// 				ItemCount: payload.length,
// 				Totalprice: beforeDiscountPrice,
// 				Totaldiscountprice: atDiscountPrice,
// 			};
// 		}

// 		case cartDataError:
// 			return {
// 				...state,
// 				loading: false,
// 				data: [],
// 				error: true,
// 			};

// 		case deleteLoading:
// 			return {
// 				...state,
// 				loading: true,
// 			};

// 		case deleteSuccess:
// 			return {
// 				...state,
// 				loading: false,
// 				deletemsg: payload,
// 			};

// 		case deleteError:
// 			return {
// 				...state,
// 				loading: false,
// 				error: true,
// 				deletemsg: "",
// 			};

// 		case addToBagLoading:
// 			return {
// 				...state,
// 				addBagLoading: true,
// 			};

// 		case addToBagSuccess:
// 			return {
// 				...state,
// 				addBagLoading: false,
// 				addBagSuccess: payload,
// 			};

// 		case addToBagError:
// 			return {
// 				...state,
// 				addBagLoading: false,
// 				addBagError: payload,
// 			};

// 		default:
// 			return state;
// 	}
// };
