import React from "react";
import styles from "./style.module.css";
import whiteLogo from "../../assets/whiteLogo.png";

function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.logo}>
				<img src={whiteLogo} alt="logo Kasa" />
			</div>
			<div className={styles.copyright}></div>
		</div>
	);
}

export default Footer;
