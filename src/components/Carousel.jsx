import React, { useState } from "react";
import { CarouselBtn } from "../buttons/CarouselBtn";

export const Carousel = () => {
	const images = [
		"https://images-static.nykaa.com/uploads/2d0411ad-bbc4-48fb-958e-3b049df26009.gif",
		"https://images-static.nykaa.com/creatives/fdd26646-5041-4dc0-a56d-4bd09011d481/default.jpg?tr=cm-pad_resize,w-900",
		"https://images-static.nykaa.com/creatives/9a45d117-edbf-49fe-9f88-a8405103915f/default.jpg?tr=cm-pad_resize,w-900",
		"https://images-static.nykaa.com/creatives/f5f67fbe-9630-4ce2-a561-8d4b2985f748/default.jpg?tr=cm-pad_resize,w-900",
		"https://images-static.nykaa.com/creatives/0625b121-231f-4ec8-874f-7b52609d3ffc/default.jpg?tr=cm-pad_resize,w-900",
		"https://images-static.nykaa.com/creatives/73230aca-9d1b-48ae-9c60-ee4aaf390fd6/default.jpg?tr=cm-pad_resize,w-900",
	];

	const banners1 = [
		"https://images-static.nykaa.com/uploads/92bd5868-a3eb-4c46-bf9f-e6a8a30b7faa.jpg?tr=cm-pad_resize,w-1800",
		"https://images-static.nykaa.com/uploads/d8b299a4-dea1-47aa-922a-44484af59a7e.jpg?tr=cm-pad_resize,w-1800",
	];
	const banners2 = [
		"https://images-static.nykaa.com/uploads/5de9a659-ee82-436f-92a7-c778babd9a41.gif",

		"https://images-static.nykaa.com/uploads/de22c78a-4477-49f4-add1-c2808d2978e0.gif",
	];

	// State to keep track of the current image index
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
	const [currentBannerIndex1, setCurrentBannerIndex1] = useState(0);

	//  total number of views for images each view will show 2 images
	const totalImageViews = Math.ceil(images.length / 2);

	//  total number of banner views
	const totalBannerViews = banners1.length;
	const totalBannerViews1 = banners2.length;

	return (
		<div className=" w-full h-auto overflow-hidden">
			{/* Main Carousel */}
			<div
				className="flex transition-transform duration-500 ease-in-out gap-x-4 m-10"
				style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
				{images.map((image, index) => (
					<div key={index} className="w-1/2 flex-shrink-0">
						<img
							src={image}
							alt={`Slide ${index}`}
							className="w-full h-[400px] object-cover rounded-[10px]"
						/>
					</div>
				))}
			</div>

			{/* Next and Previous Buttons for Main Carousel */}
			<CarouselBtn
				currentImageIndex={currentImageIndex}
				setCurrentImageIndex={setCurrentImageIndex}
				direction="prev"
				totalViews={totalImageViews}
				isBanner={false}
			/>
			<CarouselBtn
				currentImageIndex={currentImageIndex}
				setCurrentImageIndex={setCurrentImageIndex}
				direction="next"
				totalViews={totalImageViews}
				isBanner={false}
			/>

			{/* Banner Section */}
			<div className="relative mt-10">
				<div
					className="flex transition-transform duration-500 ease-in-out gap-x-4 m-10"
					style={{ transform: `translateX(-${currentBannerIndex * 100}%)` }}>
					{banners1.map((banner, index) => (
						<div key={index} className="w-full flex-shrink-0">
							<img
								src={banner}
								alt={`Banner ${index}`}
								className="w-full h-[100px] object-cover rounded-[10px]"
							/>
						</div>
					))}
				</div>

				{/* Next and Previous Buttons for Banner Carousel */}
				<CarouselBtn
					currentImageIndex={currentBannerIndex}
					setCurrentImageIndex={setCurrentBannerIndex}
					direction="prev"
					totalViews={totalBannerViews}
					// isBanner={true}  passing flag to check banner button
					isBanner={true}
				/>
				<CarouselBtn
					currentImageIndex={currentBannerIndex}
					setCurrentImageIndex={setCurrentBannerIndex}
					direction="next"
					totalViews={totalBannerViews}
					isBanner={true}
				/>
			</div>

			<div className="relative mt-10">
				<div
					className="flex transition-transform duration-500 ease-in-out gap-x-4 m-10"
					style={{ transform: `translateX(-${currentBannerIndex1 * 100}%)` }}>
					{banners2.map((banner, index) => (
						<div key={index} className="w-full flex-shrink-0">
							<img
								src={banner}
								alt={`Banner ${index}`}
								className="w-full h-[100px] object-cover rounded-[10px]"
							/>
						</div>
					))}
				</div>

				{/* Next and Previous Buttons for Banner Carousel */}
				<CarouselBtn
					currentImageIndex={currentBannerIndex1}
					setCurrentImageIndex={setCurrentBannerIndex1}
					direction="prev"
					totalViews={totalBannerViews1}
					// isBanner={true}  passing flag to check banner button
					isBanner={true}
				/>
				<CarouselBtn
					currentImageIndex={currentBannerIndex1}
					setCurrentImageIndex={setCurrentBannerIndex1}
					direction="next"
					totalViews={totalBannerViews1}
					isBanner={true}
				/>
			</div>
		</div>
	);
};
