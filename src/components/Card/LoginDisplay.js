import React from "react";
import DetailDisplay from "./DetailDisplay";
import ErrorDisplay from "./ErrorDisplay";
import { useSelector } from "react-redux";
import AllSuggestion from "../Suggestion/Suggestions";

//Login page display
function LoginDisplay() {
	const error = useSelector((state) => state.error);
	const isLoading = useSelector((state) => state.loading);
	const userDetails = useSelector((state) => state.searchResult);
	return (
		<div>
			{isLoading === true ? (
				<h1>loading...</h1>
			) : error === null ? (
				<div>
					<DetailDisplay details={userDetails} />
					<AllSuggestion />
				</div>
			) : (
				<ErrorDisplay error={error} />
			)}
		</div>
	);
}

export default LoginDisplay;
