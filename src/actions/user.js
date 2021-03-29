import { ACTION } from "../constants/actionType";
import UserHelper from "../helper/user";

export const addError = (err) => {
	return {
		type: ACTION.error,
		payload: err,
	};
};

export const addResult = (details) => {
	return {
		type: ACTION.resultFound,
		payload: details,
	};
};

export const addLogin = () => {
	return {
		type: ACTION.logIn,
	};
};

export const addLogout = () => {
	return {
		type: ACTION.logOut,
	};
};

export const addUsers = (details) => {
	return {
		type: ACTION.getAll,
		payload: details,
	};
};

export const addLoading = (value) => {
	return {
		type: ACTION.loading,
		payload: value,
	};
};

// action creator for getting a profile of a user
export const search = (username) => {
	const helper = new UserHelper();

	return async (dispatch) => {
		dispatch(addLoading(true));
		try {
			const details = await helper.fetchDetails(username);
			dispatch(addResult(details.data));
		} catch (err) {
			dispatch(addError(err.message));
		}
		dispatch(addLoading(false));
	};
};
// action creator for login of a user
export const loginAction = (username, password) => {
	const helper = new UserHelper();
	return async (dispatch) => {
		dispatch(addLoading(true));
		try {
			const userDetails = await helper.getProfile(password);
			if (userDetails.data.login === username) {
				localStorage.setItem("token", password);
				dispatch(addResult(userDetails.data));
				dispatch(addLogin());
			} else {
				dispatch(addError("wrong username"));
			}
		} catch (err) {
			dispatch(addError(err.message));
		}
		dispatch(addLoading(false));
	};
};
// action creator for getting all the users details
export const getAllUser = () => {
	const helper = new UserHelper();
	return async (dispatch) => {
		try {
			const data = await helper.fetchAllUser();
			dispatch(addUsers(data));
		} catch (err) {
			dispatch(addError(err.message));
		}
	};
};
//action creator on refresh the login page
export const refreshAction = (password) => {
	const helper = new UserHelper();
	return async (dispatch) => {
		dispatch(addLoading(true));
		try {
			const userDetail = await helper.getProfile(password);
			dispatch(addResult(userDetail.data));
			dispatch(addLogin());
		} catch (err) {
			dispatch(addError(err.message));
		}
		dispatch(addLoading(false));
	};
};
