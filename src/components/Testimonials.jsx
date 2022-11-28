import React from "react";
import { feedback } from "../constants";
import styles from "../styles";
import FeedBackCard from "./FeedbackCard";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
	<section
		id='clients'
		className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mx-10`}
	>
		{/* todo */}
		<div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient  ' />
		<div className='w-full flex justify-between  items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]  '>
			<h1 className={styles.heading2}>
				What people are <br className='sm:block hidden mx-20 sm:text-[10px]' />{" "}
				saying about us
			</h1>
			<div className='w-full md:mt-0 mt-6'>
				<p className={`${styles.paragraph} text-left max-w-[450px]`}>
					Everything you need to accept card payments and grow your business
					anywhere on the planet.
				</p>
			</div>
		</div>
		<div className='flex flex-wrap w-full justify-center sm:justify-start relative z-[1]'>
			{feedback.map((card) => (
				<FeedBackCard
					key={card.id}
					{...card}
				/>
			))}
		</div>
	</section>
);

export default Testimonials;
