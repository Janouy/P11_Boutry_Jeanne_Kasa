import React, { useState } from "react";
import styles from "./style.module.css";

function Collapse({ info }) {
	const [isCollapsesOpen, setIsCollapseOpen] = useState(false);

	return (
		<div className={styles.collapse}>
			<div className={styles.collapseTitle}>
				<div> {info.title}</div>
				<div className={styles.btnCollapse} onClick={() => setIsCollapseOpen(!isCollapsesOpen)}>
					{!isCollapsesOpen ? (
						<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 1.33447L8.00465 8.13311L14.5973 1.33447" stroke="#E9E9E9" strokeWidth="2" />
						</svg>
					) : (
						<svg
							width="16"
							height="10"
							viewBox="0 0 16 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							transform="rotate(180)"
						>
							<path d="M1 1.33447L8.00465 8.13311L14.5973 1.33447" stroke="#E9E9E9" strokeWidth="2" />
						</svg>
					)}
				</div>
			</div>
			<div className={isCollapsesOpen ? styles.collapseContent : styles.displayNone}>{info.text}</div>
		</div>
	);
}

export default Collapse;
