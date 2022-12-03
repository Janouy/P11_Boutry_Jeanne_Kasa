import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Card from "../../components/Card/Card";

function Home() {
	const [leasesDatas, setLeasesData] = useState([]);

	useEffect(() => {
		fetch("annonces.json")
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else if (response.status === 404) {
					return Promise.reject("error 404");
				} else {
					return Promise.reject("some other error: " + response.status);
				}
			})
			.then((data) => setLeasesData(data))
			.catch((error) => console.log("error is", error));
	}, []);

	return (
		<div className={styles.home}>
			<div className={styles.homeTitleImageWrapper}>
				<div className={styles.homeTitleImage}></div>
				<div className={styles.homeTitle}>Chez vous, partout et ailleurs</div>
			</div>
			<div className={styles.leaseCards}>
				{leasesDatas.map((lease) => (
					<Card key={lease.id} leaseName={lease.title} />
				))}
			</div>
		</div>
	);
}

export default Home;
