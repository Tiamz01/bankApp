import React from "react";
import { quotes } from "../assets";

const FeedBackCard = ({ content, name, title, img }) => (
	<div className='flex justify-center px-10 flex-col py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 feedback-card'>
		<img
			src={quotes}
			alt='double-quotes'
			className='w-[42px] h-[27px] object-contain'
		/>
		<p className='font-poppins font-normal text-[18px]leading-[32px] text-white my-10'>
			{content}
		</p>
		<div className='flex items-center flex-row'>
			<img
				src={img}
				alt='name'
				className='w-[48px] h-[48px] rounded-full'
			/>
			<div className='flex flex-col ml-4'>
				<h4 className='font-poppins font-semibold text-[20px]  leading-[32px]  text-white '>
					{name}
				</h4>
				<h4 className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite '>
					{title}
				</h4>
			</div>
		</div>
	</div>
);

export default FeedBackCard;
