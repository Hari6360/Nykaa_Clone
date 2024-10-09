import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = ({ filter }) => {
	const [data, setData] = useState([]); // Initialize data to an empty array
	const [showAll, setShowAll] = useState(false);

	const url =
		"https://nykaa-e3286-default-rtdb.firebaseio.com/faceData/faceData.json";

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// Filter products based on the selected category
	const filteredData =
		filter === "All"
			? data
			: data.filter(
					(product) =>
						product.category &&
						product.category.toLowerCase() === filter.toLowerCase()
			  );

	// If "showAll" is false, only show the first 3 products
	const displayedData = showAll ? filteredData : filteredData.slice(0, 3);

	return (
		<>
			<div className="grid grid-cols-3 gap-4">
				{displayedData.length > 0 ? (
					displayedData.map((product, i) => (
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
						</div>
					))
				) : (
					<p>No products available</p>
				)}
			</div>
			<button
				onClick={() => setShowAll(!showAll)}
				className="mt-4 p-2 bg-blue-500 text-white rounded">
				{showAll ? "Show Less" : "Show More"}
			</button>
		</>
	);
};

export default Products;
