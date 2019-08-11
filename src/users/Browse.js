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

class ConnectedBrowse extends Component {
	render() {
		const { message, type, user } = this.props;
		return (
			<div className="content">
				<div className="browse">
					{message && type === "alert-danger" ? (
						<Alert intent="danger">{message}</Alert>
					) : (
						<p />
					)}
					{message && type === "alert-success" ? (
						<Alert intent="success">{message}</Alert>
					) : (
						<p />
					)}

					<p>DOGGOS</p>
				</div>
			</div>
		);
	}
}

const Browse = connect(mapStateToProps)(ConnectedBrowse);

export default Browse;
