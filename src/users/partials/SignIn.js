import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../../actions/userActions";
import { Link } from "react-router-dom";
import { Button, Card, InputGroup, Alert, Elevation } from "@blueprintjs/core";

function mapStateToProps(state) {
	const { user, loggingIn } = state.authentication;
	const { message, type } = state.alert;
	return {
		user,
		message,
		type,
		loggingIn
	};
}

class ConnectedSignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				email: "",
				password: ""
			},
			submitted: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		const { user } = this.state;
		this.setState({
			user: {
				...user,
				[name]: value
			}
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const { dispatch } = this.props;
		const { user } = this.state;
		if (user.email && user.password) {
			dispatch(userActions.login(user));
		}
	}

	render() {
		const { message, type, loggingIn } = this.props;
		const { user, submitted } = this.state;
		return (
			<div className="content">
				{message && type === "alert-danger" ? (
					<Alert intent="danger">{message}</Alert>
				) : (
					" "
				)}
				<Card elevation={Elevation.TWO}>
					<form onSubmit={this.handleSubmit}>
						<p className="h4 text-center py-4">Sign In</p>

						<div
							className={
								"form-group" + (submitted && !user.email ? " has-error" : "")
							}
						>
							<InputGroup
								label="email"
								group
								type="email"
								validate
								error="wrong"
								success="right"
								name="email"
								onChange={this.handleChange}
							/>
						</div>
						<div
							className={
								"form-group" + (submitted && !user.password ? " has-error" : "")
							}
						>
							<InputGroup
								label="password"
								group
								type="password"
								validate
								name="password"
								onChange={this.handleChange}
							/>
						</div>
						<div className="text-center py-4 mt-3">
							<Button intent="primary" type="submit">
								Sign In
							</Button>
							{loggingIn}
							<Link to="/user/register" className="btn btn-link">
								Register
							</Link>
						</div>
					</form>
				</Card>
			</div>
		);
	}
}

const SignIn = connect(mapStateToProps)(ConnectedSignIn);

export default SignIn;
