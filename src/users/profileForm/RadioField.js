import React from "react";
import { RadioGroup, Radio } from "@blueprintjs/core";

const RadioField = props => {
	return (
		<RadioGroup
			name={props.name}
			label={props.label}
			onChange={props.handleChange}
			selectedValue={props.selectedValue}
			inline={true}
		>
			<Radio label={props.radioLabel1} value={props.value1} />
			<Radio label={props.radioLabel2} value={props.value2} />
			<Radio label={props.radioLabel3} value={props.value3} />
			<Radio label={props.radioLabel4} value={props.value4} />
		</RadioGroup>
	);
};

export default RadioField;
