import * as TYPE from "../types";

export const initalState = [
	// {
	// 	firstname: "nicita",
	// 	lastname: "pasecinic",
	// 	feedback: "a good feedback",
	// },
];

export const rootReducer = (state = initalState, action) => {
	switch (action.type) {
		case TYPE.SUBMIT_FORM:
			const formData = action.payload;
			formData.id = state.length;
			formData.date = new Date().toISOString();
			return state.concat(formData);
		case TYPE.FETCH_DATA:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};
