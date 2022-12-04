import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import LodgingSheet from "../../pages/LodgingSheet/LodgingSheet";
import Error from "../../pages/Error/Error";

function Router() {
	const [leasesDatas, setLeasesData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		async function fetchDatas() {
			setIsLoading(true);
			await fetch("annonces.json")
				.then((response) => response.json())
				.then((datas) => setLeasesData(datas), setIsLoading(false));
		}
		fetchDatas();
	}, []);

	return (
		<Routes>
			<Route path="/:id" element={<LodgingSheet leasesDatas={leasesDatas} isLoading={isLoading} />} />
			<Route path="/" element={<Home leasesDatas={leasesDatas} isLoading={isLoading} />} />
			<Route path="/about" element={<About />} />
			<Route path="/*" element={<Error />} />
		</Routes>
	);
}

export default Router;
