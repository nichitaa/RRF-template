import React from "react";
import { render } from "react-dom";
import { storeConfigs } from "./redux/store/storeConfigs";
import { Provider } from "react-redux";
import AppContext from "./context";

import App from "./App";
import "./index.css";

const store = storeConfigs();

const app = (
	<AppContext>
		<Provider store={store}>
			<App />
		</Provider>
	</AppContext>
);

render(app, document.getElementById("root"));
