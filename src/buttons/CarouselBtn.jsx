import React from "react";

export const CarouselBtn = ({
	setCurrentImageIndex,
	direction,
	totalViews,
	isBanner,
}) => {
	const handleClick = () => {
		setCurrentImageIndex((prevIndex) => {
			if (direction === "next") {
				return prevIndex === totalViews - 1 ? 0 : prevIndex + 1;
			} else if (direction === "prev") {
				return prevIndex === 0 ? totalViews - 1 : prevIndex - 1;
			}
			return prevIndex;
		});
	};

	//positions to set button
	const buttonPosition = direction === "next" ? "right-4" : "left-4";
	const topPosition = isBanner ? "top-10" : "top-1/2";

	return (
		<button
			onClick={handleClick}
			className={`absolute ${topPosition} transform -translate-y-1/2 ${buttonPosition} text-black bg-white rounded-full px-4 py-6 hover:bg-gray-800 z-10`}>
			{direction === "next" ? "→" : "←"}
		</button>
	);
};

export default CarouselBtn;
