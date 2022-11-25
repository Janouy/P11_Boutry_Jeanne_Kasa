import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import LodgingSheet from "../../pages/LodgingSheet/LodgingSheet";
import Error from "../../pages/Error/Error";

function Router() {
	return (
		<Routes>
			<Route path="/" element={Home} />
			<Route path="/about" element={About} />
			<Route path="/lodgingSheet" element={LodgingSheet} />
			<Route path="/*" element={Error} />
		</Routes>
	);
}

export default Router;
