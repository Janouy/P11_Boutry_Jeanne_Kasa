import React, { useState } from "react";
import styles from "./style.module.css";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

function Carousel({ pictures }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const numberOfPictures = pictures.length;
	const nextPict = () => {
		if (currentIndex === numberOfPictures - 1) {
			setCurrentIndex(0);
		} else {
			setCurrentIndex(currentIndex + 1);
		}
	};
	const prevPict = () => {
		if (currentIndex === 0) {
			setCurrentIndex(numberOfPictures - 1);
		} else {
			setCurrentIndex(currentIndex - 1);
		}
	};

	return (
		<div className={styles.carousel}>
			<div
				className={styles.carouselPict}
				style={{
					backgroundImage: `url(${pictures[currentIndex]})`,
				}}
			>
				{numberOfPictures > 1 ? (
					<>
						<div className={styles.buttonsWrapper}>
							<div className={styles.leftButton} onClick={prevPict}>
								<img className={styles.leftArrow} src={leftArrow} alt="left arrow" />
							</div>
							<div className={styles.rightButton} onClick={nextPict}>
								<img className={styles.rightArrow} src={rightArrow} alt="left arrow" />
							</div>
						</div>
						<div className={styles.bulletPoints}>
							{" "}
							{pictures.map((pict, index) =>
								index === currentIndex ? (
									<div className={styles.selectedBulletPoint} key={pict}>
										.
									</div>
								) : (
									<div className={styles.bulletPoint} key={pict}>
										.
									</div>
								),
							)}
						</div>
					</>
				) : null}
			</div>
		</div>
	);
}

export default Carousel;
