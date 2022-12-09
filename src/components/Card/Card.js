import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

function Card({ leaseInfo }) {
	return (
		<Link to={`/lodgingSheet/${leaseInfo.id}`} className={styles.cardWrapper}>
			<div className={styles.cardColored}></div>
			<div className={styles.cardGradient}>
				<div className={styles.cardTitle}>{leaseInfo.title}</div>
			</div>
		</Link>
	);
}

export default Card;
