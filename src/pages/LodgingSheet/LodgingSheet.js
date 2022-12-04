import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Carousel from "../../components/Carousel/Carousel";

function LodgingSheet({ isLoading, leasesDatas }) {
	let params = useParams();
	const [leasesPictures, setleasesPictures] = useState([]);
	useEffect(() => {
		if (leasesDatas.length !== 0) {
			const asyncProcess = async () => {
				await setleasesPictures(leasesDatas.find((lease) => lease.id === params.id).pictures);
			};
			asyncProcess();
		}
	}, [leasesDatas, params.id]);

	return (
		<div className={styles.lodgingSheet}>
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.carousel}>
					<div className={styles.carouselPict}>
						<Carousel pictures={leasesPictures} />{" "}
					</div>
					{/* <div className={styles.lodgingSheetContent}>
						<div className={styles.lodgingSheetTitle}></div>
						<div className={styles.lodgingSheetTags}></div>
						<div className={styles.lodgingSheetInfos}>
							<div className={styles.lodgingSheetDescription}></div>
							<div className={styles.lodgingSheetEquipment}></div>
						</div>
					</div> */}
				</div>
			)}
		</div>
	);
}

export default LodgingSheet;
