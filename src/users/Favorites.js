import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert } from "@blueprintjs/core";

function mapStateToProps(state) {
	const { user } = state.authentication;
	const { message, type } = state.alert;
	return {
		user,
		message,
		type
	};
}

class ConnectedFavorites extends Component {
	render() {
		const { message, type, user } = this.props;

		return (
			<div className="content">
				<div className="favorites">
					{message && type === "alert-danger" ? (
						<Alert intent="danger">{message}</Alert>
					) : (
						" "
					)}
					{message && type === "alert-success" ? (
						<Alert intent="success">{message}</Alert>
					) : (
						" "
					)}
				</div>
			</div>
		);
	}
}

const Favorites = connect(mapStateToProps)(ConnectedFavorites);

export default Favorites;
