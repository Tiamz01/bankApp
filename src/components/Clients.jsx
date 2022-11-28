import React from "react";
import { clients } from "../constants";
import styles from "../styles";

const Clients = () => (
	<section className={`${styles.flexCenter} `}>
		<div className={`${styles.flexCenter} w-full flex-wrap justify-evenly`}>
			{clients.map((client) => (
				<div
					key={client.id}
					className={`${styles.flexCenter} sm:first-letter:min-w-[192px] min-w-[120px] 
					
					`}
				>
					<img
						src={client.logo}
						className='sm:w-[192px] w-[100px] object-contain '
						alt='clients'
					/>
				</div>
			))}
		</div>
	</section>
);

export default Clients;
