import React from "react";
import { InputGroup } from "@blueprintjs/core";

export const types = {
	ADOPTER_INFO: "adopterInfo",
	PREVIOUS_PETS: "previousPets",
	HOUSEHOLD_INFO: "householdInfo",
	REFERENCES: "references",
	CURRENT_PETS: "currenctPets",
	NEW_PET: "newPet"
};

const InputField = props => {
	return (
		<InputGroup
			intent="primary"
			onChange={props.handleChange}
			placeholder={props.placeholder}
			type="text"
			name={props.name}
			className="gap-bottom-sm gap-right-md"
			fill={false}
		/>
	);
};

export default InputField;
