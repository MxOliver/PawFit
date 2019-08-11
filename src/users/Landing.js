import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../actions/userActions";
import { Button, Card, H2 } from "@blueprintjs/core";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function mapStateToProps(state) {
	const { user, loggedIn } = state.authentication;
	return {
		user,
		loggedIn
	};
}

class ConnectedUserLanding extends Component {
	constructor(props) {
		super(props);

		this.handleLogOut = this.handleLogOut.bind(this);
	}

	handleLogOut() {
		const { dispatch } = this.props;
		dispatch(userActions.signOut());
	}

	render() {
		const { user, loggedIn } = this.props;
		let buttonGroup;

		if (user && loggedIn) {
			buttonGroup = (
				<Button
					className="black-text"
					intent="warning"
					onClick={this.handleLogOut}
				>
					Sign Out
				</Button>
			);
		} else {
			buttonGroup = (
				<div className="text-center">
					<Button intent="primary">
						<Link className="black-text" to="/user/sign_in">
							Sign In
						</Link>
					</Button>
					<Button intent="success">
						<Link className="black-text" to="/user/register">
							Sign Up
						</Link>
					</Button>
				</div>
			);
		}

		return (
			<Row className="align-center-all full-width full-height">
				<Col sm={10} md={8} style={{ width: "35em" }}>
					<div className="text-center">
						<Card>
							<H2>Welcome to Pawfit</H2>
							<p className="my-4">Swipe your way to your furrever friend.</p>
							{buttonGroup}
						</Card>
					</div>
				</Col>
			</Row>
		);
	}
}

const UserLanding = connect(mapStateToProps)(ConnectedUserLanding);

export default UserLanding;
