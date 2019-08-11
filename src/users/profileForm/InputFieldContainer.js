import React from "react";
import InputField, { types } from "./InputField";
import RadioField from "./RadioField";
import { withFormik } from "formik";
import { RadioGroup, Radio, Button } from "@blueprintjs/core";

const InputFieldContainer = ({ handleSubmit, handleChange, values }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div className={`${types.ADOPTER_INFO}`}>
				<p className="gap-bottom-xs">Your Name</p>
				<InputField
					name="adopter_name"
					handleChange={handleChange}
					placeholder=""
				/>

				<p className="gap-bottom-xs">Name(s) of other adult(s) in household</p>
				<InputField
					name="household_adults_names"
					handleChange={handleChange}
					placeholder=""
				/>

				<p className="gap-bottom-xs">Relationship to you</p>
				<InputField
					name="household_adults_relationships"
					handleChange={handleChange}
					placeholder=""
				/>

				<p className="gap-bottom-xs">Address</p>
				<InputField name="address" handleChange={handleChange} placeholder="" />

				<p className="gap-bottom-xs">Zipcode</p>
				<InputField name="zipcode" handleChange={handleChange} placeholder="" />

				<p className="gap-bottom-xs">Email</p>
				<InputField name="email" handleChange={handleChange} placeholder="" />

				<p className="gap-bottom-xs">Occupation</p>
				<InputField
					name="occupation"
					handleChange={handleChange}
					placeholder=""
				/>

				<p className="gap-bottom-xs">
					Number of children living in home (part or full-time)
				</p>
				<InputField
					name="household_children"
					handleChange={handleChange}
					placeholder=""
				/>

				<p className="gap-bottom-xs">Number of adults living in home</p>
				<InputField
					name="household_adults"
					handleChange={handleChange}
					placeholder=""
				/>

				<p className="gap-bottom-xs">
					Names and Ages of Children (if applicable)
				</p>
				<InputField
					name="household_children_ages"
					handleChange={handleChange}
					placeholder=""
				/>
			</div>

			<div className={`${types.HOUSEHOLD_INFO}`}>
				<RadioField
					name="dwelling"
					handleChange={handleChange}
					selectedValue={values.dwelling}
					label="Type of Dwelling"
					radioLabel1="House"
					radioLabel2="Apartment"
					radioLabel3="Condo"
					radioLabel4="Other"
					value1="house"
					value2="apartment"
					value3="condo"
					value4="other"
				/>

				<p className="gap-bottom-xs">If other what type?</p>
				<InputField
					name="dwelling_other"
					handleChange={handleChange}
					placeholder=""
				/>

				<p className="gap-bottom-xs">
					If you have a yard, how high is your fence?
				</p>
				<InputField
					name="fence_height"
					handleChange={handleChange}
					placeholder=""
				/>

				<RadioGroup
					label="Does your home have a pool?"
					onChange={handleChange}
					name="pool"
					selectedValue={values.pool}
				>
					<Radio label="Yes" value="yes_pool" />
					<Radio label="No" value="no_pool" />
				</RadioGroup>

				<RadioGroup
					label="If you have a pool, is it fenced?"
					onChange={handleChange}
					name="pool_fence"
					selectedValue={values.pool}
				>
					<Radio label="Yes" value="yes_fence" />
					<Radio label="No" value="no_fence" />
				</RadioGroup>

				<RadioGroup
					label="If you are not a homeowner, do you have the landlord's permission to have a pet?"
					onChange={handleChange}
					name="permission"
					selectedValue={values.permission}
				>
					<Radio label="Yes" value="yes_permission" />
					<Radio label="No" value="no_permission" />
				</RadioGroup>

				<p className="gap-bottom-xs">Landlord's Name</p>
				<InputField
					name="landlord_name"
					handleChange={handleChange}
					placeholder=""
				/>

				<p className="gap-bottom-xs">Landlord's Phone</p>
				<InputField
					name="landlord_phone"
					handleChange={handleChange}
					placeholder=""
				/>
			</div>
			<Button
				type="submit"
				text="Save"
				intent="primary"
				className="gap-bottom-md"
			/>
		</form>
	);
};

const ProfileForm = withFormik({
	mapPropsToValues: () => ({ values: [] }),

	handleSubmit: (values, { setSubmitting }) => {
		console.log(values);
		setSubmitting(false);
	}
})(InputFieldContainer);

export default ProfileForm;
