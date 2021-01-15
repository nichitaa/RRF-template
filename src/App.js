import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Form from "./components/Form/Form";
import FormsDetails from "./components/FormsDetails/FormsDetails";
import Navbar from "./components/Navbar/Navbar";

const FormPage = () => {
	return (
		<div className="form-container">
			<Form />
		</div>
	);
};

function App() {
	return (
		<div className="bgimage">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" component={FormPage} />
					<Route exact path="/details" component={FormsDetails} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
