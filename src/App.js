import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from "./helpers/history";
import { alertActions } from "./actions/alertActions";
import { Router, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import UserLanding from "./users/Landing";
import UserProfile from "./users/Profile";
import Favorites from "./users/Favorites";
import Browse from "./users/Browse";
import Register from "./users/partials/Register";
import SignIn from "./users/partials/SignIn";
import ShowProfile from "./users/profileForm/ShowProfile";
import EditProfile from "./users/profileForm/EditProfile";
import { Alert } from "@blueprintjs/core";

class ConnectedApp extends Component {
	constructor(props) {
		super(props);

		const { dispatch } = this.props;
		history.listen((location, action) => {
			dispatch(alertActions.clear());
		});
	}

	render() {
		const { message, type } = this.props;
		return (
			<div>
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
				<Router history={history}>
					<div>
						<main>
							<Switch>
								<Route exact path="/" component={Landing} />
								<Route
									path="/user"
									render={({ match }) => (
										<>
											<Route
												exact
												path={`${match.url}/index`}
												component={UserLanding}
											/>
											<Route
												exact
												path={`${match.url}/sign_in`}
												component={SignIn}
											/>
											<Route
												exact
												path={`${match.url}/register`}
												component={Register}
											/>
											<Route
												exact
												path={`${match.url}/browse`}
												component={Browse}
											/>
											<Route
												exact
												path={`${match.url}/profile`}
												component={UserProfile}
											/>
											<Route
												exact
												path={`${match.url}/add_profile`}
												component={ShowProfile}
											/>
											<Route
												exact
												path={`${match.url}/edit_profile`}
												component={EditProfile}
											/>
											<Route
												exact
												path={`${match.url}/favorites`}
												component={Favorites}
											/>
										</>
									)}
								/>
							</Switch>
						</main>
					</div>
				</Router>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { message, type } = state.alert;
	return {
		message,
		type
	};
}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
