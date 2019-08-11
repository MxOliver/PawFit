import React, { Component } from "react";
import ProfileForm from "./InputFieldContainer";

class EditProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="gap-around gap-left-md">
				<ProfileForm />
			</div>
		);
	}
}

export default EditProfile;
