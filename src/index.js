import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { LeasesProvider } from "./utils/Context/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<LeasesProvider>
			<App />
		</LeasesProvider>
	</BrowserRouter>,
);
