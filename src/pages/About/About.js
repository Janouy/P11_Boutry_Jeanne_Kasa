import React from "react";
import styles from "./style.module.css";
import Collapse from "../../components/Collapse/Collapse";
import collapsesInfos from "../../data/collapse.json";

function About() {
	return (
		<div className={styles.about}>
			<div className={styles.aboutPicture}></div>
			<div className={styles.collapsesWrapper}>
				{collapsesInfos.map((collapseInfo) => (
					<Collapse info={collapseInfo} key={collapseInfo.id} />
				))}
			</div>
		</div>
	);
}

export default About;
