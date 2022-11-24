import React, { useState } from "react";

import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className='w-full flex py-6 justify-between items-center navbar'>
			<img
				className='w-[124px] h-[32px]'
				src={logo}
				alt='hoobank'
			/>
			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-poppins font-normal cursor-pointer text-[16px] ${
							index === navLinks.index - 1 ? "mr-0" : "mr-10"
						} text-white `}
					>
						<a href={`#$nav.id`}>{nav.title}</a>
					</li>
				))}
			</ul>
			<div className='sm:hidden flex flex-1 justify-end items-center'>
				<img
					src={toggle ? close : menu}
					alt='menu'
					className='w-[28px] h-28px] object-contain'
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div
					className={`${toggle ? "flex" : "hidden"} p-6 right-0 mx-4 
					absolute top-20 my-2 min-w-[140px] rounded-xl 
					bg-black-gradient sidebar`}
				>
					<ul className='list-none flex  flex-col justify-end items-center flex-1'>
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-poppins font-normal cursor-pointer text-[16px] ${
									index === navLinks.index - 1 ? "mr-0" : "mb-4"
								} text-white `}
							>
								<a href={`#$nav.id`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
