import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../../actions/userActions";
import { Link } from "react-router-dom";
import { Button, Card, InputGroup, Alert, Elevation } from "@blueprintjs/core";

function mapStateToProps(state) {
	const { user } = state.authentication;
	const { message, type } = state.alert;
	return {
		user,
		message,
		type
	};
}

class ConnectedSignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				email: "",
				password: "",
				passwordConfirmation: "",
				name: ""
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
		let newUser = {
			name: user.name,
			email: user.email,
			password: user.password
		};
		if (
			user.email &&
			user.password &&
			user.password === user.passwordConfirmation
		) {
			dispatch(userActions.register(newUser));
		}
	}

	render() {
		const { message, type } = this.props;
		const { submitted, user } = this.state;

		return (
			<div className="content">
				{message && type === "alert-danger" ? (
					<Alert intent="danger">{message}</Alert>
				) : (
					" "
				)}
				<Card elevation={Elevation.TWO}>
					<form className="registerForm" onSubmit={this.handleSubmit}>
						<p className="h4 text-center py-4">Register</p>
						<div
							className={
								"form-group" + (submitted && !user.name ? " has-error" : "")
							}
						>
							<InputGroup
								label="name"
								group
								validate
								error="wrong"
								success="right"
								name="name"
								onChange={this.handleChange}
							/>
						</div>
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
						<div
							className={
								"form-group" +
								(submitted && !user.passwordConfirmation ? " has-error" : "")
							}
						>
							<InputGroup
								label="password confirmation"
								group
								type="password"
								validate
								name="passwordConfirmation"
								onChange={this.handleChange}
							/>
						</div>
						<div className="text-center py-4 mt-3">
							<Button intent="primary" type="submit">
								Register
							</Button>
							<Link to="/user/sign_in" className="btn btn-link">
								Sign In
							</Link>
						</div>
					</form>
				</Card>
			</div>
		);
	}
}

const Register = connect(mapStateToProps)(ConnectedSignUp);

export default Register;
