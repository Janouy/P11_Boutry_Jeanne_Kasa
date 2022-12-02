import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import Card from "../../components/Card/Card";

function Home() {
	const [leasesDatas, setLeasesData] = useState([]);

	useEffect(() => {
		fetch("annonces.json")
			.then((response) => response.json())
			.then((datas) => setLeasesData(datas));
	}, []);

	return (
		<div className={styles.home}>
			<div className={styles.homeTitleImageWrapper}>
				<div className={styles.homeTitleImage}></div>
				<div className={styles.homeTitle}>Chez vous, partout et ailleurs</div>
			</div>
			<div className={styles.leaseCardsWrapper}>
				<div className={styles.leaseCards}>
					{leasesDatas.map((lease) => (
						<Card key={lease.id} leaseName={lease.title} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Home;
