import React, { createContext, useState, useEffect } from "react";

export const LeasesContext = createContext();

export const LeasesProvider = ({ children }) => {
	const [leasesDatas, setLeasesData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		async function fetchDatas() {
			setIsLoading(true);
			await fetch("http://localhost:3000/annonces.json")
				.then((response) => response.json())
				.then((datas) => setLeasesData(datas), setIsLoading(false));
		}
		fetchDatas();
	}, []);
	return (
		<LeasesContext.Provider value={{ leasesDatas, setLeasesData, isLoading, setIsLoading }}>
			{children}
		</LeasesContext.Provider>
	);
};
