import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { search } from "../../actions/user";
import DetailDisplay from "./DetailDisplay";
import ErrorDisplay from "./ErrorDisplay";

const mapStateToProp = (state) => {
	return { state };
};
/**
 * class component for display of profile
 */
class SocialCard extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(search(this.props.match.params.username));
	}
	componentDidUpdate(prevProps) {
		const prevUsername = prevProps.match.params.username;
		const username = this.props.match.params.username;
		if (username !== prevUsername) {
			const { dispatch } = this.props;
			dispatch(search(this.props.match.params.username));
		}
	}
	render() {
		const error = this.props.state.error;

		return (
			<div>
				{this.props.state.loading === true ? (
					<h1>loading...</h1>
				) : error === null ? (
					<DetailDisplay details={this.props.state.searchResult} />
				) : (
					<ErrorDisplay error={this.props.state.error} />
				)}
			</div>
		);
	}
}

export default connect(mapStateToProp)(SocialCard);
