import React from "react";
import styles from "./style.module.css";

function Tags({ tags }) {
	return (
		<div>
			{tags.map((tag, index) => (
				<div key={index}>{tag}</div>
			))}
		</div>
	);
}

export default Tags;
