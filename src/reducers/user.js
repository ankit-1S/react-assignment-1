/* eslint-disable indent */
import { ACTION } from "../constants/actionType";

const intialState = {
	loading: true,
	searchResult: {},
	error: null,
	isLogged: false,
	allUser: [],
};
// all reducer used for redux
const userReducer = (state = intialState, action) => {
	switch (action.type) {
		case ACTION.loading:
			return {
				...state,
				loading: action.payload,
			};
		case ACTION.resultFound:
			return {
				...state,
				searchResult: action.payload,
				error: null,
			};
		case ACTION.error:
			return {
				...state,
				error: action.payload,
			};
		case ACTION.logIn:
			return {
				...state,
				isLogged: true,
			};

		case ACTION.logOut:
			return {
				...state,
				isLogged: false,
			};
		case ACTION.getAll:
			return {
				...state,
				allUser: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
