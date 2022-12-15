import React from "react";
import Loading from "../../assets/loading.gif";

function Loader() {
	return (
		<div>
			<img src={Loading} alt="loader" />
		</div>
	);
}

export default Loader;
