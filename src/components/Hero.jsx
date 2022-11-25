import React from "react";
import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
	<section
		id='home'
		className={`flex md:flex-row flex-col ${styles.paddingY}`}
	>
		<div
			className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
		>
			<div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
				<img
					src={discount}
					alt='discount'
					className='w-[32px] h-[32px]'
				/>
				<p className={`${styles.paragraph} ml-2`}>
					<span className='text-white'>1 month</span> Discount for
					<span className='text-white'> 20% </span> Account
				</p>
			</div>

			<div className='flex flex-row justify-between items-center w-full'>
				<h1 className='flex-1 font-poppins font-semibold text-white text-[52px] ss:text-[72px] ss:leading-[100px] leading-[75px] '>
					The Next <br className='sm:block hidden' />{" "}
					<span className='text-gradient'> Generation </span>
					<br className='sm:block hidden' />
				</h1>

				<div className='ss:flex hidden md:mr-4 mr-0'>
					<GetStarted />
				</div>
			</div>

			<h1 className='flex-1 font-poppins  block font-semibold text-white ss:text-[68px] text-[32px] ss:leading-[100px] leading-[75px] w-full '>
				Payment Method.
			</h1>
			<p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio,
				necessitatibus ducimus omnis commodi quia enim nulla quibusdam placeat
				officiis dolorum dolorem perferendis repellat temporibus ex impedit
				nihil dignissimos cumque excepturi.
			</p>
		</div>
		<div className={`${styles.flexCenter}flex-1 flex-row relative`}>
			<img
				src={robot}
				alt='robot'
				className='w-[100%]h-[100%}  relative z-[5]'
			/>
			<div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
			<div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>

			<div className='absolute z-[1] w-[50%] h-[50%] bottom-20 right-20 rounded-full blue__gradient'></div>
		</div>

		<div className={`ss:hidden ${styles.flexCenter}`}>
			<GetStarted />
		</div>
	</section>
);

export default Hero;
