import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

function Error() {
	return (
		<div className={styles.error}>
			<div className={styles.codeError}>404</div>
			<div className={styles.messageError}>Oups! La page que vous demandez n'existe pas.</div>
			<Link className={styles.linkHome} to="/">
				Retourner sur la page d'accueil
			</Link>
		</div>
	);
}

export default Error;
