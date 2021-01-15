import React from "react";
import { connect } from "react-redux";

import s from "./formdetails.module.css";

const FormsDetails = ({ forms }) => {
	return (
		<div className={s.pageWrapper}>
			{forms.length > 0 ? (
				forms.map((form) => {
					return (
						<div className={s.cardWrapper} key={form.id}>
							<h3>
								{form.firstname} {form.lastname}
							</h3>
							<p className={s.feedback}>{form.feedback}</p>
							<p className={s.date}>{form.date}</p>
						</div>
					);
				})
			) : (
				<h2>No Feedbacks</h2>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	// return state available only to this component
	return {
		forms: state.forms,
	};
};

export default connect(mapStateToProps, null)(FormsDetails);
