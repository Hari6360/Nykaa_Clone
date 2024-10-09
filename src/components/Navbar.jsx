import React, { useState } from "react";
import { FaGift, FaMobileAlt, FaQuestionCircle, FaStore } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [activeTab, setActiveTab] = useState("Popular");
	const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
	const navigate = useNavigate();

	const topBrands = [
		"Maybelline New York",
		"Lakme",
		"Nykaa Cosmetics",
		"M.A.C",
		"The Face Shop",
		"L'Oreal Paris",
		"Nykaa Naturals",
		"Biotique",
		"Huda Beauty",
		"Kama Ayurveda",
		"Innisfree",
		"The Body Shop",
	];

	const brandLogos = [
		{
			name: "Wishcare",
			img: "https://images-static.naikaa.com/media/wysiwyg/uiTools/2024-9/wishcare.png",
		},
		{
			name: "Maybelline",
			img: "https://adn-static2.nykaa.com/media/wysiwyg/2019/Maybelline1211.png",
		},
		{
			name: "Lakme",
			img: "https://images-static.naikaa.com/media/wysiwyg/uiTools/2023-10/Lakme_118x55pxls.png",
		},
		{
			name: "Nykaa Cosmetics",
			img: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/nykaa-cosmetics.png",
		},
		{
			name: "MAC",
			img: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/mac.png",
		},
		{
			name: "L'Oreal",
			img: "https://adn-static2.nykaa.com/media/wysiwyg/2019/lorealparis.png",
		},
		{
			name: "Huda",
			img: "https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/Huda.png",
		},
		{
			name: "Biotique",
			img: "https://adn-static2.nykaa.com/media/wysiwyg/2018/Biotique_new.png",
		},
		{
			name: "Wishcare",
			img: "https://images-static.naikaa.com/media/wysiwyg/uiTools/2024-9/wishcare.png",
		},
		{
			name: "Maybelline",
			img: "https://adn-static2.nykaa.com/media/wysiwyg/2019/Maybelline1211.png",
		},
		{
			name: "Lakme",
			img: "https://images-static.naikaa.com/media/wysiwyg/uiTools/2023-10/Lakme_118x55pxls.png",
		},
		{
			name: "Nykaa Cosmetics",
			img: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/nykaa-cosmetics.png",
		},
		{
			name: "MAC",
			img: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/mac.png",
		},
		{
			name: "L'Oreal",
			img: "https://adn-static2.nykaa.com/media/wysiwyg/2019/lorealparis.png",
		},
		{
			name: "Huda",
			img: "https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/Huda.png",
		},
		{
			name: "Biotique",
			img: "https://adn-static2.nykaa.com/media/wysiwyg/2018/Biotique_new.png",
		},
	];

	const handleCartBtn = () => {
		navigate("/cart");
	};

	return (
		<div className="w-full">
			{/* Top Navbar */}
			<nav className="bg-gradient-to-r from-red-900 to-red-600 text-white px-4 py-2">
				<div className="container mx-auto flex justify-between items-center">
					<a href="#" className="font-bold text-sm blink">
						Festive Deals Await! Shop From Our Durga Pujo Sale Now!
					</a>
					<div className="flex items-center space-x-4 text-sm">
						<a href="#" className="flex items-center space-x-1">
							<FaMobileAlt />
							<span>Get App</span>
						</a>
						<a href="#" className="flex items-center space-x-1">
							<FaStore />
							<span>Store & Events</span>
						</a>
						<a href="#" className="flex items-center space-x-1">
							<FaGift />
							<span>Gift Card</span>
						</a>
						<a href="#" className="flex items-center space-x-1">
							<FaQuestionCircle />
							<span>Help</span>
						</a>
					</div>
				</div>
			</nav>

			{/* Main Navbar */}
			<nav className="bg-white border-b shadow-sm">
				<div className="container flex mx-8 justify-evenly py-4 px-16">
					{/* Logo and Links */}
					<div
						className="flex items-center space-x-8"
						onClick={() => navigate("/")}>
						<img
							src="https://logos-download.com/wp-content/uploads/2021/01/Nykaa_Logo.png"
							alt="Nykaa logo"
							className="h-8"
						/>
						<div
							className="relative"
							onMouseEnter={() => setShowCategoryDropdown(true)}
							onMouseLeave={() => setShowCategoryDropdown(false)}>
							<a href="#" className="text-gray-700 font-medium">
								Categories
							</a>
							{/* Dropdown for Categories */}
							{showCategoryDropdown && (
								<div className="absolute left-0 mt-2 bg-white border border-gray-300 shadow-lg rounded-md overflow-hidden z-10 p-4 w-[800px]">
									<div className="grid grid-cols-5 gap-4">
										<div>
											<h3 className="font-bold mb-2">Face</h3>
											<ul className="space-y-1 text-gray-800">
												<li>Face Primer</li>
												<li>Concealer</li>
												<li>Foundation</li>
												<li>Compact</li>
												<li>Contour</li>
												<li>Loose Powder</li>
											</ul>
										</div>
										<div>
											<h3 className="font-bold mb-2">Eyes</h3>
											<ul className="space-y-1 text-gray-800">
												<li>Kajal</li>
												<li>Eyeliner</li>
												<li>Mascara</li>
												<li>Eye Shadow</li>
												<li>False Eyelashes</li>
											</ul>
										</div>
										<div>
											<h3 className="font-bold mb-2">Lips</h3>
											<ul className="space-y-1 text-gray-800">
												<li>Lipstick</li>
												<li>Liquid Lipstick</li>
												<li>Lip Gloss</li>
												<li>Lip Liner</li>
											</ul>
										</div>
										<div>
											<h3 className="font-bold mb-2">Nails</h3>
											<ul className="space-y-1 text-gray-800">
												<li>Nail Polish</li>
												<li>Nail Art Kits</li>
												<li>Nail Care</li>
											</ul>
										</div>
										<div>
											<h3 className="font-bold mb-2">Tools & Brushes</h3>
											<ul className="space-y-1 text-gray-800">
												<li>Face Brush</li>
												<li>Eye Brush</li>
												<li>Brush Sets</li>
												<li>Mirrors</li>
											</ul>
										</div>
									</div>
								</div>
							)}
						</div>
						<div
							className="relative"
							onMouseEnter={() => setShowDropdown(true)}
							onMouseLeave={() => setShowDropdown(false)}>
							<a href="#" className="text-gray-700 font-medium">
								Brands
							</a>
							{/* Dropdown for Brands */}
							{showDropdown && (
								<div className="absolute left-0 mt-2 bg-white border border-red-500 shadow-lg rounded-md overflow-hidden z-10 p-4 w-[600px]">
									<div className="flex space-x-4 mb-4 w-full">
										{["Popular", "Luxe", "OnlyAtNykaa", "NewLaunches"].map(
											(tab) => (
												<button
													key={tab}
													className={`px-4 py-2 ${
														activeTab === tab
															? "bg-pink-600 text-white"
															: "bg-gray-100"
													}`}
													onClick={() => setActiveTab(tab)}>
													{tab}
												</button>
											)
										)}
									</div>
									<div className="grid grid-cols-4 gap-20 w-full">
										{/* Left side: Top Brands */}
										<div>
											<h3 className="text-gray-700 font-bold mb-2">
												Top Brands
											</h3>
											<ul className="space-y-1 text-gray-800">
												{topBrands.map((brand, index) => (
													<li key={index} className="hover:underline">
														<a href="#">{brand}</a>
													</li>
												))}
											</ul>
										</div>

										{/* Right side: Brand Logos */}
										<div className="col-span-3 grid grid-cols-3 gap-4">
											{brandLogos.map((brand, index) => (
												<div
													key={index}
													className="flex justify-center items-center">
													<img
														src={brand.img}
														alt={brand.name}
														className="h-12"
													/>
												</div>
											))}
										</div>
									</div>
								</div>
							)}
						</div>
						<a href="#" className="text-gray-700 font-medium">
							Luxe
						</a>
						<a href="#" className="text-gray-700 font-medium">
							Nykaa Fashion
						</a>
						<a href="#" className="text-gray-700 font-medium">
							Beauty Advice
						</a>
					</div>
					<div className="flex items-center space-x-4">
						<div className="relative">
							<AiOutlineSearch className="absolute top-3 left-2 text-gray-500" />
							<input
								type="text"
								placeholder="Search on Nykaa"
								className="pl-8 pr-4 py-2 border rounded-md focus:outline-none"
							/>
						</div>

						<button className="bg-pink-600 text-white px-4 py-2 rounded-md">
							Sign in
						</button>

						<button onClick={handleCartBtn}>
							<AiOutlineShoppingCart className="text-2xl text-gray-600" />
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
