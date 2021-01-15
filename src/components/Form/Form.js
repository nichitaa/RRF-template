import React, { useState } from "react";
import { connect } from "react-redux";
import { formSubmit } from "../../redux/actions/actionCreators";

import s from "./form.module.css";

const Form = ({ formSubmit }) => {
	const initialFormState = {
		firstname: "",
		lastname: "",
		feedback: "",
	};
	const [form, setForm] = useState(initialFormState);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (
			form.firstname.trim() === "" ||
			form.lastname.trim() === "" ||
			form.feedback.trim() === ""
		) {
			alert("The form fields can not be empy");
		} else {
			formSubmit(form.firstname, form.lastname, form.feedback);
			setForm(initialFormState);
		}
	};

	const handleInputChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form className={s.formContainer} onSubmit={handleSubmit}>
			<h2>Complete the form</h2>
			<input
				required
				maxLength="20"
				minLength="4"
				className={s.formItem}
				type="text"
				placeholder="First Name"
				name="firstname"
				id="firstname"
				value={form.firstname}
				onChange={handleInputChange}
			/>

			<input
				required
				maxLength="20"
				minLength="4"
				className={s.formItem}
				type="text"
				placeholder="Last Name"
				name="lastname"
				id="lastname"
				value={form.lastname}
				onChange={handleInputChange}
			/>

			<textarea
				required
				maxLength="200"
				minLength="10"
				className={s.formItem}
				type="text"
				placeholder="Your feedback"
				id="feedback"
				name="feedback"
				value={form.feedback}
				onChange={handleInputChange}
			/>
			<button type="submit" className={s.formSubmitButton}>
				Submit
			</button>
		</form>
	);
};

const mapDispatchToProps = (dispatch) => {
	// return redux action creators
	return {
		formSubmit: (firsname, lastname, feedback) =>
			dispatch(formSubmit(firsname, lastname, feedback)),
	};
};

export default connect(null, mapDispatchToProps)(Form);
