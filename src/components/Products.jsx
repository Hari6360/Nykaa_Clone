import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext"; // Importing the useCart hook

const Products = ({ filter }) => {
	const [data, setData] = useState([]);
	const [showAll, setShowAll] = useState(false);

	const url =
		"https://nykaa-e3286-default-rtdb.firebaseio.com/faceData/faceData.json";

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				// Converting data to array if it's an object because state is []
				const fetchedData = res.data ? Object.values(res.data) : [];
				setData(fetchedData);
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

	// the handleAddToCart function from context
	const { handleAddToCart } = useCart();

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

							{/* Add to Cart Button */}
							<button
								onClick={() => handleAddToCart(product)}
								className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600">
								Add to Cart
							</button>
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
