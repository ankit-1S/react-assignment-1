import React from "react";
import PropTypes from "prop-types";
import urlPropType from "url-prop-type";

//Component to display the profile
function DetailDisplay({ details }) {
	return (
		<div>
			<img src={details.avatar_url} alt="" />
			<h1> username : {details.login}</h1>
			<h2>
				location :{" "}
				{details.location ? details.location : "Not-Available"}
			</h2>
			<h2>Number of followers : {details.followers}</h2>
			<h2>Number of following : {details.following}</h2>
			<h2>Bio:{details.bio ? details.bio : "Not-Available"}</h2>
			<a href={details.html_url} target="_blank" rel="noreferrer">
				LINK to Github<br></br>
			</a>
			{details.blog ? (
				<a href={details.blog} target="_blank" rel="noreferrer">
					LINK to Blog
				</a>
			) : (
				""
			)}

			<h2>email :{details.email ? details.email : "Not-Available"}</h2>
		</div>
	);
}

DetailDisplay.propTypes = {
	details: PropTypes.shape({
		location: PropTypes.string,
		followers: PropTypes.number,
		following: PropTypes.number,
		bio: PropTypes.string,
		avatar_url: urlPropType,
		html_url: urlPropType,
		blog: PropTypes.oneOfType([urlPropType, PropTypes.string]),
		email: PropTypes.string,
	}),
};

export default DetailDisplay;
