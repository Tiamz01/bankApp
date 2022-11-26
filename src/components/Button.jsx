import React from "react";

const Button = ({ styles }) => (
	<button
		type='button'
		className={`py-4 px-6 bg-blue-gradient 
			font-medium font-poppins outline-none text-[18px] text-primary  ml-6 rounded-[10px] ${styles}`}
	>
		Get Started
	</button>
);

export default Button;
