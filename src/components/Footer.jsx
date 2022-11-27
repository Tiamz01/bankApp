import React from "react";
import styles from "../styles";
import { logo } from "../assets";
import { socialMedia, footerLinks } from "../constants";

const Footer = () => (
	<section className={`${styles.flexCenter} ${styles.paddingY} flex-col mx-10`}>
		<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `}>
			<div className='flex-1 flex flex-col justify-start mr-10'>
				<img
					src={logo}
					alt='hoobank'
					className='w-[266px] h-[72px] object-contain '
				/>
				<p className={`${styles.paragraph} mt-4 max-w-[310px] `}>
					A new way of making reliable payment, easy and secure payment.
				</p>
			</div>
			<div
				className='flex flex-row 
			flex-[1.5] justify-between flex-wrap md:mt-0 mt-10'
			>
				{footerLinks.map((footerLink) => (
					<div
						className='flex flex-col ss:my-0 my-4 min-w-[150px]'
						key={footerLink.key}
					>
						<h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
							{footerLink.title}
						</h4>
						<ul className='list-none mt-3 '>
							{footerLink.links.map((link, index) => (
								<li
									index={index}
									key={link.name}
									className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer  ${
										index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
									}`}
								>
									{link.name}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
		<div className='w-full flex justify-between items-center border-t-[1px] border-t-[#3F3E45] md:flex-row flex-col pt-6'>
			<p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
				<span className='capitalize text-[#3F3E45] font-poppins text-[20px] mr-4 '>
					Copyright
				</span>
				<span className='capitalize text-[#3F3E45] font-poppins text-[20px] mr-4 '>
					@
				</span>
				2021 HooBank. All Rights Reserved.
			</p>
			<div className='flex flex-row mt-0 md:mt:0'>
				{socialMedia.map((social, index) => (
					<img
						src={social.icon}
						alt={social.id}
						key={social.id}
						className={`w-[21px] h-[21px] object-contain cursor-pointer ${
							index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
						}`}
					/>
				))}
			</div>
			<span className='capitalize text-[#3F3E45] font-poppins text-[15px] mr-4 mt-3 text-center '>
				design inspired by JSMastery
			</span>
		</div>
	</section>
);

export default Footer;
