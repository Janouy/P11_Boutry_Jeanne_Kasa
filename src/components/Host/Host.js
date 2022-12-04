import React from "react";
import styles from "./style.module.css";

function Host({ host }) {
	return (
		<div>
			{host.name}
			<img src={host.picture} alt="host" />
		</div>
	);
}

export default Host;
