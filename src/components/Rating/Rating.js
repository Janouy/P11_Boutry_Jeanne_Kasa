import React, { useState, useEffect } from "react";
import styles from "./syle.module.css";

function Rating({ rating }) {
	const [redStars, setRedStars] = useState([]);
	const [greyStars, setGreyStars] = useState([]);
	useEffect(() => {
		setRedStars([]);
		setGreyStars([]);
		if (rating) {
			for (let i = 0; i < Number(rating); i++) {
				setRedStars((stars) => [...stars, "star"]);
			}
			for (let i = 0; i < 5 - Number(rating); i++) {
				setGreyStars((stars) => [...stars, "star"]);
			}
		}
	}, [rating]);

	return (
		<div className={styles.lSRating}>
			{redStars.map((star, index) => (
				<div className={styles.lSStar} key={index}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
						<path
							d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
							fill="#FF6060"
						/>
					</svg>
				</div>
			))}
			{greyStars.map((star, index) => (
				<div className={styles.lSStar} key={index}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none">
						<path
							d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
							fill="#E3E3E3"
						/>
					</svg>
				</div>
			))}
		</div>
	);
}

export default Rating;
