import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Carousel from "../../components/Carousel/Carousel";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";

function LodgingSheet({ leasesDatas, isLoading }) {
	let params = useParams();
	const [leasesPictures, setleasesPictures] = useState([]);
	const [leasesInfos, setleasesInfos] = useState({});
	const [tags, setTags] = useState([]);
	const [host, setHost] = useState([]);
	useEffect(() => {
		if (leasesDatas.length !== 0) {
			const thisLease = leasesDatas.find((lease) => lease.id === params.id);
			setleasesPictures(thisLease.pictures);
			setTags(thisLease.tags);
			setHost(thisLease.host);
			setleasesInfos(thisLease);
		}
	}, [params.id, leasesDatas]);

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
						<div>
							<div>
								<div className={styles.lSTitle}>{leasesInfos.title}</div>
								<div className={styles.lSLocation}>{leasesInfos.location}</div>
								<Tags tags={tags} />
							</div>
							<div>
								<Host host={host} />
								<div className={styles.lSRate}>{leasesInfos.rating}</div>
							</div>
						</div>
						<div className={styles.lSCollapses}>
							<div className={styles.lSDescription}>{leasesInfos.description}</div>
							<div className={styles.lSEquipment}>{leasesInfos.equipments}</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default LodgingSheet;
