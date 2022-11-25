import React from "react";
import styles from "./style.module.css";

function Home() {
	return (
		<div className={styles.home}>
			<div className={styles.homeTitleImage}></div>
			<div className={styles.homeTitle}>Chez vous, partout et ailleurs</div>
		</div>
	);
}

export default Home();
