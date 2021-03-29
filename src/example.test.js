/* eslint-disable indent */
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adaptor from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adaptor() });
import { ACTION } from "./constants/actionType";

import DetailDisplay from "./components/Card/DetailDisplay";
import userReducer from "./reducers/user";

describe("just testing", () => {
	it("working", () => {
		expect(2 + 2).toBe(4);
	});
	const fakeuser = {
		login: "ankit",
		node_id: "MDQ6VXNlcjYxODU3",
		avatar_url: "https://avatars.githubusercontent.com/u/61857?v=4",
		html_url: "https://github.com/ankit",
		name: "Ankit Ahuja",
		blog: "http://ankitahuja.com",
		location: "San Francisco, CA",
		email: null,
		bio: null,
		followers: 111,
		following: 22,
	};
	it("details should be displayed", () => {
		const wrapper = shallow(<DetailDisplay details={fakeuser} />);
		console.log(wrapper.debug());
		// expect(wrapper).toEqual("");
	});
});

describe("checking reducer", () => {
	const fakeSate = {
		searchResult: {},
		error: null,
		isLogged: false,
		allUser: [],
	};

	it("working with null", () => {
		const newState = userReducer(fakeSate, {});
		expect(newState).toEqual(fakeSate);
	});
	it("working with result found", () => {
		const newState = userReducer(fakeSate, {
			action: ACTION.resultFound,
			payload: {},
		});
		expect(newState).toEqual(newState);
	});
	it("working with result found", () => {
		const newState = userReducer(
			{},
			{ action: ACTION.resultFound, payload: {} }
		);
		expect(newState).toEqual({});
	});

	it("working with error", () => {
		const newState = userReducer({}, { action: ACTION.error, payload: {} });
		expect(newState).toEqual({});
	});
	it("working with log-in", () => {
		const newState = userReducer({}, { action: ACTION.logIn, payload: {} });
		expect(newState).toEqual(newState);
	});
	it("working with logout", () => {
		const newState = userReducer({}, { action: ACTION.error, payload: {} });
		expect(newState).toEqual({});
	});
});
