import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

function Card({ leaseInfo }) {
	return (
		<Link to={`/${leaseInfo.id}`} className={styles.cardWrapper}>
			<div className={styles.card1}></div>
			<div className={styles.card2}>
				<div className={styles.cardTitle}>{leaseInfo.title}</div>
			</div>
		</Link>
	);
}

export default Card;
