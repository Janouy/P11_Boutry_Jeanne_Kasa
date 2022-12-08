import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Carousel from "../../components/Carousel/Carousel";
import Tags from "../../components/Tags/Tags";
import Collapse from "../../components/Collapse/Collapse";

function LodgingSheet({ leasesDatas, isLoading }) {
	const params = useParams();
	const navigate = useNavigate();
	const [leasesPictures, setleasesPictures] = useState([]);
	const [leasesInfos, setleasesInfos] = useState({});
	const [tags, setTags] = useState([]);
	const [host, setHost] = useState({});
	const [equipments, setEquipments] = useState({});
	const [description, setDescription] = useState({});
	const [redStars, setRedStars] = useState([]);
	const [greyStars, setGreyStars] = useState([]);

	useEffect(() => {
		if (leasesDatas.length !== 0) {
			const thisLease = leasesDatas.find((lease) => lease.id === params.id);
			setleasesPictures(thisLease.pictures);
			setTags(thisLease.tags);
			setHost(thisLease.host);
			setleasesInfos(thisLease);
			setEquipments({
				title: "Equipement",
				text: thisLease.equipments.map((equipment, index) => <div key={index}>{equipment}</div>),
			});
			setDescription({
				title: "Description",
				text: thisLease.description,
			});
		}
	}, [params.id, leasesDatas]);
	useEffect(() => {
		if (leasesDatas.every((data) => data.id !== params.id)) {
			navigate("/*");
		}
	}, [params.id, leasesDatas, navigate]);
	useEffect(() => {
		setRedStars([]);
		setGreyStars([]);
		if (leasesInfos.rating) {
			for (let i = 0; i < Number(leasesInfos.rating); i++) {
				setRedStars((stars) => [...stars, "star"]);
			}
			for (let i = 0; i < 5 - Number(leasesInfos.rating); i++) {
				setGreyStars((stars) => [...stars, "star"]);
			}
		}
	}, [leasesInfos]);
	return (
		<div className={styles.lodgingSheet}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<div className={styles.lScarousel}>
						<div className={styles.carouselPict}>
							<Carousel pictures={leasesPictures} />
						</div>
					</div>

					<div className={styles.lSContent}>
						<div className={styles.lSTop}>
							<div className={styles.lSLeftPart}>
								<div className={styles.lSTitle}>{leasesInfos.title}</div>
								<div className={styles.lSLocation}>{leasesInfos.location}</div>
								<Tags tags={tags} />
							</div>
							<div className={styles.lSRightPart}>
								<div className={styles.lSHost}>
									<div className={styles.lSHostName}>{host.name}</div>
									<img className={styles.lSHostPict} src={host.picture} alt={host.name} />
								</div>
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
							</div>
						</div>
						<div className={styles.lSCollapses}>
							<div className={styles.lSDescription}>
								<Collapse info={description} />
							</div>
							<div className={styles.lSEquipment}>
								<Collapse info={equipments} />
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default LodgingSheet;
