import React from "react";
import PropTypes from "prop-types";

// to display the error
const ErrorDisplay = ({ error }) => {
	return <div>{<h1>{error}</h1>}</div>;
};
ErrorDisplay.propTypes = {
	error: PropTypes.string,
};

export default ErrorDisplay;
