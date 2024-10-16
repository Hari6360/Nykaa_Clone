import React, { useEffect, useState } from "react";
import axios from "axios";
import { ScrollTopBtn } from "../buttons/ScrollTopBtn";

export const Makeup = ({ filter }) => {
	const [data, setData] = useState([]);

	const url =
		"https://nykaa-e3286-default-rtdb.firebaseio.com/faceData/faceData.json";

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				// Converting data to array if it's an object because state is in array
				const fetchedData = res.data ? Object.values(res.data) : [];
				setData(fetchedData);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div className="grid grid-cols-3 gap-4">
				{data.length > 0 ? (
					data.map((product, i) => (
						<div key={i} className="bg-white p-4 rounded-lg shadow-md">
							{/* Product Image */}
							<img
								src={product.image}
								alt={product.name}
								className="h-[220px] w-auto mx-auto"
							/>
							<h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
							<div className="mt-2">
								<span className="line-through text-gray-500">
									{product.price}
								</span>{" "}
								<span className="text-red-600 font-bold">
									{product.discount_price}
								</span>
								<span className="ml-2 text-green-600">
									({product.discount_percentage})
								</span>
							</div>
							<div className="mt-2 flex items-center">
								<span className="text-yellow-500">★★★★★</span>{" "}
								<span className="ml-2 text-gray-600">
									{product.reviews} reviews
								</span>
							</div>

							<p className="mt-2 text-gray-500">{product.shades}</p>
							<button className=" mx-auto  flex flex-col align-baseline justify-center bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 active:bg-red-700 transition duration-300 ease-in-out">
								Add To Cart
							</button>
						</div>
					))
				) : (
					<p>No products available</p>
				)}
			</div>
			<ScrollTopBtn />
		</>
	);
};
