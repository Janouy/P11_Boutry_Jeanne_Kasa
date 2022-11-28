import React from "react";
import styles from "./style.module.css";

function Card({ leaseName }) {
	return (
		<div className={styles.cardWrapper}>
			<div className={styles.card1}></div>
			<div className={styles.card2}>
				<div className={styles.cardTitle}>{leaseName}</div>
			</div>
		</div>
	);
}

export default Card;
