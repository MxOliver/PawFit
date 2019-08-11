import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../actions/userActions";
import { Button } from "@blueprintjs/core";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ShowProfile from "./profileForm/ShowProfile";

function mapStateToProps(state) {
	const { user } = state.authentication;
	const { profile, fetched } = state.userProfile;
	return {
		user,
		profile,
		fetched
	};
}

class ConnectedProfile extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { dispatch, user } = this.props;
		///dispatch(userActions.getProfile(user.response._id));
	}

	render() {
		const { user, profile, fetched } = this.props;

		let buttonGroup;
		let view;

		// if (user && user.response.profile && profile && profile.profile) {
		buttonGroup = (
			<div style={{ marginLeft: "35px" }}>
				<Button intent="primary">
					<Link to="/user/edit_profile">Edit</Link>
				</Button>
			</div>
		);
		// } else {
		// buttonGroup = (
		// 	<div style={{ marginLeft: "35px" }}>
		// 		<Button intent="primary">
		// 			<Link to="/user/add_profile">Add</Link>
		// 		</Button>
		// 	</div>
		// );
		// }

		if (fetched) {
			// view = <ShowProfile data={profile.profile.profile} />;
			view = <div />;
		}

		return (
			<div className="gap-left-md">
				<div className="profile" style={{ paddingTop: "25px" }}>
					<div>
						<Row>
							<Col md={8} sm={12}>
								<ShowProfile />
							</Col>
							<Col md={4} sm={6}>
								<Row>{buttonGroup}</Row>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		);
	}
}

const UserProfile = connect(mapStateToProps)(ConnectedProfile);

export default UserProfile;
