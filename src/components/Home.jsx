import React, { useEffect, useState } from "react";
import CarouselBtn from "../buttons/CarouselBtn";
import Products from "./Products";
import { useNavigate } from "react-router-dom";
import { Carousel } from "./Carousel";
import { ScrollTopBtn } from "../buttons/ScrollTopBtn";
import { Footer } from "./Footer";

export const Home = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [filter, setFilter] = useState("All");
	const totalViews = 5;

	const navigate = useNavigate();

	const images = [
		"https://images-static.nykaa.com/creatives/b2c04f16-a4d9-40c1-b655-6485543eeac9/default.jpg?tr=cm-pad_resize,w-900",
		"https://images-static.nykaa.com/creatives/8ec665f2-731c-4857-82a8-a29153850138/default.jpg?tr=cm-pad_resize,w-900",
		"https://images-static.nykaa.com/creatives/d94c154f-43e0-4d72-b44a-f014c6e0c210/default.jpg?tr=cm-pad_resize,w-900",
		"https://images-static.nykaa.com/creatives/4e921e08-8341-4124-842d-caec4408e50b/default.jpg?tr=cm-pad_resize,w-900",
		"https://images-static.nykaa.com/creatives/4e921e08-8341-4124-842d-caec4408e50b/default.jpg?tr=cm-pad_resize,w-900",
	];

	const handleMakeup = () => {
		setFilter("Makeup");
		navigate("/makeup");
	};
	const handleSkin = () => {
		setFilter("Skin");
		navigate("/Skin");
	};

	return (
		<>
			<Carousel />
			<div className="h-auto bg-gray-200 rounded-sm overflow-hidden relative p-6">
				{/* Top Text Section */}
				<div>
					<h1 className="font-bold text-2xl">Explore Our Top Brands</h1>
					<p className="font-serif text-xl">A-listers to obsess over</p>
				</div>
				<hr className="mx-auto my-4 w-full border-t-2 border-black" />

				<div className="relative flex items-center justify-center mb-8">
					<CarouselBtn
						currentImageIndex={currentImageIndex}
						setCurrentImageIndex={setCurrentImageIndex}
						direction="prev"
						totalViews={totalViews}
						isBanner={false}
					/>

					<div className="flex overflow-hidden justify-center w-full">
						<img
							src={images[currentImageIndex]}
							alt={`Brand ${currentImageIndex + 1}`}
							className="rounded-lg shadow-lg h-[600px]"
						/>
					</div>

					<CarouselBtn
						currentImageIndex={currentImageIndex}
						setCurrentImageIndex={setCurrentImageIndex}
						direction="next"
						totalViews={totalViews}
						isBanner={false}
					/>
				</div>
			</div>

			<div>
				<img
					src="https://images-static.nykaa.com/uploads/5efbc38d-f488-41dc-8be4-08096f22cef2.gif"
					alt=""
				/>
				<div className="bg-pink-300 flex gap-4 p-4 justify-evenly">
					<div className="bg-white p-2 rounded-lg shadow-md">
						<img
							className="h-[300px] w-auto"
							src="https://images-static.nykaa.com/media/catalog/product/f/f/ff5c92c9300607379792_01.jpg"
							alt=""
						/>
					</div>
					<div className="bg-white p-2 rounded-lg shadow-md">
						<img
							className="h-[300px] w-auto"
							src="https://images-static.nykaa.com/media/catalog/product/9/5/95eac96THEAO00000044_1.jpg"
							alt=""
						/>
					</div>
					<div className="bg-white p-2 rounded-lg shadow-md">
						<img
							className="h-[300px] w-auto"
							src="https://images-static.nykaa.com/media/catalog/product/a/1/a1408d4THEDE00000052_1.jpg"
							alt=""
						/>
					</div>
					<div className="bg-white p-2 rounded-lg shadow-md">
						<img
							className="h-[300px] w-auto"
							src="https://images-static.nykaa.com/media/catalog/product/7/d/7d5c13dMINIM00000004_1.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>

			<div className="mx-8 px-10">
				<div>
					<h1 className="font-bold text-2xl">Hot list</h1>
				</div>
				<hr className="mx-auto my-4 w-full border-t-2 border-gray-500" />
				<div>
					<button
						className="w-10 h-8 mx-4 border border-red-500 rounded-full"
						onClick={() => setFilter("All")}>
						All
					</button>
					<button
						className="w-10 h-8 mx-4 border border-red-500 rounded-full"
						onClick={() => setFilter("Hair")}>
						Hair
					</button>
					<button
						className="w-14 h-8 mx-4 border border-red-500 rounded-full"
						onClick={handleSkin}>
						Skin
					</button>
					<button
						className="w-24 h-8 mx-4 border border-red-500 rounded-full"
						onClick={() => setFilter("Bath&Body")}>
						Bath&Body
					</button>
					<button
						className="w-20 h-8 mx-4 border border-red-500 rounded-full"
						onClick={handleMakeup}>
						Makeup
					</button>
				</div>

				<Products filter={filter} />
			</div>
			<ScrollTopBtn />
			<Footer />
		</>
	);
};
