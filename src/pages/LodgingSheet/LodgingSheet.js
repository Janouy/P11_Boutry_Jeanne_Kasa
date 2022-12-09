import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Carousel from "../../components/Carousel/Carousel";
import Tags from "../../components/Tags/Tags";
import Collapse from "../../components/Collapse/Collapse";
import Rating from "../../components/Rating/Rating";

function LodgingSheet({ leasesDatas, isLoading }) {
	const params = useParams();
	const navigate = useNavigate();
	const [leasesPictures, setleasesPictures] = useState([]);
	const [leasesInfos, setleasesInfos] = useState({});
	const [tags, setTags] = useState([]);
	const [host, setHost] = useState({});
	const [equipments, setEquipments] = useState({});
	const [description, setDescription] = useState({});

	useEffect(() => {
		if (leasesDatas.length !== 0 && leasesDatas.every((data) => data.id !== params.id)) {
			navigate("/*");
		} else if (leasesDatas.length !== 0) {
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
	}, [params.id, leasesDatas, navigate]);

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
								<Rating rating={leasesInfos.rating} />
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
