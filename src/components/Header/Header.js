import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.css";
import Logo from "../../assets/logo.png";

function Header() {
	const location = useLocation();
	return (
		<div className={styles.header}>
			<div className={styles.logoWrapper}>
				<Link>
					<img className={styles.logo} src={Logo} alt="kasa" />
				</Link>
			</div>
			<div className={styles.links}>
				<Link
					className={location.pathname === "/" ? styles.underlineLinkHome : styles.linkHome}
					id="homeLink"
					to="/"
				>
					Accueil
				</Link>
				<Link
					className={location.pathname === "/about" ? styles.underlineLinkAbout : styles.linkAbout}
					id="aboutLink"
					to="/about"
				>
					A propos
				</Link>
			</div>
		</div>
	);
}

export default Header;
