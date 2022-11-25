import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import Logo from "../../assets/logo.png";

function Header() {
	const [pageSelected, setPageSelected] = useState("home");

	useEffect(() => {
		pageSelected !== undefined && pageSelected === "home"
			? (document.getElementById(`homeLink`).style.textDecoration = "underline") &&
			  (document.getElementById(`aboutLink`).style.textDecoration = "none")
			: (document.getElementById(`aboutLink`).style.textDecoration = "underline") &&
			  (document.getElementById(`homeLink`).style.textDecoration = "none");
	}, [pageSelected]);
	return (
		<div className={styles.header}>
			<div className={styles.logoWrapper}>
				<Link>
					<img className={styles.logo} src={Logo} alt="kasa" />
				</Link>
			</div>
			<div className={styles.links}>
				<Link className={styles.linkHome} id="homeLink" to="/" onClick={() => setPageSelected("home")}>
					Accueil
				</Link>
				<Link className={styles.linkAbout} id="aboutLink" to="/about" onClick={() => setPageSelected("about")}>
					A propos
				</Link>
			</div>
		</div>
	);
}

export default Header;
