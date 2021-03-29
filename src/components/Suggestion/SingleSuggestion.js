import React from "react";
import "./style.css";
import { FaTimes } from "react-icons/fa";

//single suggestion block
const SingleSuggestion = ({ user, deleteSuggestion, index }) => {
	const handleClick = () => {
		deleteSuggestion(index);
	};
	return (
		<div>
			<div className="suggestion">
				<img src={user.avatar_url} alt="" />
				<a href={user.html_url} target="_blank" rel="noreferrer">
					LINK TO PROFILE
				</a>
				<FaTimes onClick={handleClick} className="cross-icon" />
			</div>
		</div>
	);
};

export default SingleSuggestion;
