import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Collapse from "../../components/Collapse/Collapse";
import Loader from "../../components/Loader/Loader";

function About() {
	const [collapseDatas, setCollapseData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		async function fetchDatas() {
			setIsLoading(true);
			await fetch("http://localhost:3000/collapse.json")
				.then((response) => response.json())
				.then((datas) => setCollapseData(datas), setIsLoading(false));
		}
		fetchDatas();
	}, []);
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.about}>
					<div className={styles.aboutPicture}></div>
					<div className={styles.collapsesWrapper}>
						{collapseDatas.map((collapseInfo) => (
							<Collapse info={collapseInfo} key={collapseInfo.id} />
						))}
					</div>
				</div>
			)}
		</>
	);
}

export default About;
