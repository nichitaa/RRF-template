import * as TYPE from "../types";
import {db} from '../../firebase/firebase'

export const formSubmit = (firstname, lastname, feedback) => {
	return {
		type: TYPE.SUBMIT_FORM,
		payload: {
			firstname,
			lastname,
			feedback,
		},
	};
};

// export const fetch = () => {
// 	return {
// 		type: TYPE.FETCH_DATA
// 	}
// }

export const fetchData = () => (dispatch) => {	
	return db.collection('feedbacks')
            .onSnapshot( (snapshot) => {
                return (snapshot.docs.map((doc) => doc.data()));
            });
}
