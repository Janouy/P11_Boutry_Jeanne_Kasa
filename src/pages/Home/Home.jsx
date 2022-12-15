import React, { useContext } from "react";
import styles from "./style.module.css";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { LeasesContext } from "../../utils/Context/index";

function Home() {
	const { leasesDatas, isLoading } = useContext(LeasesContext);
	return (
		<div className={styles.home}>
			<div className={styles.homeTitleImageWrapper}>
				<div className={styles.homeTitleImage}></div>
				<div className={styles.homeTitle}>Chez vous, partout et ailleurs</div>
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.leaseCards}>
					{leasesDatas.map((lease) => (
						<Card key={lease.id} leaseInfo={lease} />
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
