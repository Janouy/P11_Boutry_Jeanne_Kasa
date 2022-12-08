import React from "react";
import styles from "./style.module.css";

function Tags({ tags }) {
	return (
		<div className={styles.tags}>
			{tags.map((tag, index) => (
				<div className={styles.tag} key={index}>
					{tag}
				</div>
			))}
		</div>
	);
}

export default Tags;
