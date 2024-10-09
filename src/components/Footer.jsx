import { useEffect, useState } from "react";

const FootArr = [
	{
		head: "Nykaa",
		arr: [
			"Who are we?",
			"Careers",
			"Authenticity",
			"Press",
			"Testimonials",
			"Nykaa CSR",
			"Responsible Disclosure",
			"Investor Relations",
		],
	},
	{
		head: "Help",
		arr: [
			"Contact Us",
			"Frequently asked questions",
			"Store Locator",
			"Cancellation & Return",
			"Shipping & Delivery",
			"Sell on Nykaa",
		],
	},
	{
		head: "Inspire Me",
		arr: ["Beauty Book", "Nykaa TV", "Nykaa Network", "Buying Guides"],
	},
	{
		head: "Quick Links",
		arr: [
			"Offer Zone",
			"New Launches",
			"Nykaa Man",
			"Nykaa Fashion",
			"Nykaa Pro",
		],
	},
	{
		head: "Top Categories",
		arr: [
			"Makeup",
			"Skin",
			"Hair",
			"Bath & Body",
			"Appliances",
			"Mom and Baby",
			"Wellness",
			"Fragrance",
			"Natural",
			"Luxe",
		],
	},
];

const FootMid = [
	{
		img: "https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg",
		head: "Free Shipping",
		para: "On Orders Above ₹299",
	},
	{
		img: "https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg",
		head: "Easy Returns",
		para: "15-Day Return Policy",
	},
	{
		img: "https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg",
		head: "100% Authentic",
		para: "Products Sourced Directly",
	},
	{
		img: "https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg",
		head: "1900+ Brands",
		para: "1.2 Lakh+ Products",
	},
];

export const Footer = () => {
	const [email, setEmail] = useState("");
	const [screen, setScreen] = useState("");

	const screenSizefn = () => {
		const screenSize = window.outerWidth;
		if (screenSize >= 1440) {
			setScreen("lg");
		} else if (screenSize >= 768) {
			setScreen("md");
		} else {
			setScreen("sm");
		}
	};

	useEffect(() => {
		screenSizefn();
		window.addEventListener("resize", screenSizefn);
		return () => {
			window.removeEventListener("resize", screenSizefn);
		};
	}, []);

	const handleChange = (e) => {
		setEmail(e.target.value);
	};

	const addEmailfn = () => {
		setEmail("");
	};

	const EmailIcon = () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-5 w-5 mr-2"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3 8l9 6 9-6M3 8v8a2 2 0 002 2h12a2 2 0 002-2V8m-14 0l7 5 7-5"
			/>
		</svg>
	);

	const PhoneIcon = () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-5 w-5 mr-2"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3 6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25V6.75z"
			/>
		</svg>
	);

	const emailDiv = (
		<div className="p-8">
			<h2 className="text-sm flex items-center">
				<EmailIcon />
				Get special discount in your inbox
			</h2>
			<div className="flex gap-2 mt-2">
				<input
					className="border-b border-white text-white placeholder-white focus:outline-none w-40"
					value={email}
					onChange={handleChange}
					placeholder="Your Email"
					type="email"
				/>
				<button
					onClick={addEmailfn}
					className="bg-white text-black px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out">
					Send
				</button>
			</div>
		</div>
	);

	return (
		<div className="text-white mt-10">
			<div className="flex justify-center gap-10 bg-gray-800 p-8">
				{screen === "lg" ? emailDiv : null}
				<div className="flex items-center gap-2">
					<PhoneIcon />
					<div className="flex flex-col">
						<h2 className="text-sm">Experience the Nykaa mobile app</h2>
						<img
							className="mx-auto rounded-lg"
							width={150}
							height={150}
							src="https://i.pinimg.com/564x/25/60/bb/2560bbc828e28e3bede2f9023458b89e.jpg"
							alt="GooglePlay"
						/>
						<img
							className="mx-auto rounded-lg"
							width={150}
							height={150}
							src="https://i.pinimg.com/564x/93/29/00/93290032b3ef8d8711b8bb97e80b1561.jpg"
							alt="AppStore"
						/>
					</div>
				</div>
				{screen === "lg" ? (
					<div className="flex items-center gap-2">
						<PhoneIcon />
						<div className="flex flex-col">
							<h2 className="text-sm">
								For any help, you may call us at <br />
								<span> </span>1800-267-4444
							</h2>
							<h2 className="text-xs">
								(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)
							</h2>
						</div>
					</div>
				) : null}
			</div>
			{screen === "lg" ? (
				<div className="flex justify-center p-8 bg-gray-600">
					{FootArr.map((item, index) => (
						<div key={index} className="w-56">
							<h2 className="text-sm">{item.head}</h2>
							{item.arr.map((el, i) => (
								<h1 key={i} className="text-xs">
									{el}
								</h1>
							))}
						</div>
					))}
				</div>
			) : null}
			<div className="flex justify-center gap-4 text-black p-4">
				{FootMid.map((el, i) => {
					if (i === 3 && screen === "sm") return null;
					return (
						<div
							key={i}
							className={`flex ${screen === "sm" ? "grid" : "flex"}`}>
							<div className="m-auto">
								<img width={47} height={47} src={el.img} alt="img" />
							</div>
							<div className="flex flex-col">
								<h2 className="text-sm">{el.head}</h2>
								<p className="text-xs">{el.para}</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex justify-center gap-10 bg-gray-800 p-8">
				{screen !== "lg" ? emailDiv : null}
			</div>
			<div className="bg-pink-600 p-8">
				{screen === "lg" ? (
					<div className="flex justify-center gap-10">
						<h1>Terms & Conditions</h1>
						<h1>Cancellation Policy</h1>
						<h1>Privacy Policy</h1>
					</div>
				) : (
					<h2 className="text-center text-xs">HELP CENTER</h2>
				)}
				<p className="text-center text-md">
					© 2023 Nykaa E-Retail Pvt. Ltd. All Rights Reserved.
				</p>
			</div>
		</div>
	);
};
