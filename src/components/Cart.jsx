import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
	const { cart } = useCart();
	const navigate = useNavigate();

	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
			{cart.map((item, index) => (
				<div key={index} className="bg-white p-4 rounded-lg shadow-md mb-2">
					<h3 className="text-lg font-semibold">{item.title}</h3>
					<img
						src={item.imgsrc}
						alt={item.title}
						className="h-[100px] w-auto"
					/>
					<p>
						<span className="line-through text-gray-500">{item.price}</span>{" "}
						<span className="text-red-600 font-bold">
							{item["discounted-price"]}
						</span>
					</p>
					<span className="text-green-600">({item.discount})</span>
				</div>
			))}
			{cart.length === 0 && (
				<>
					<p>Your cart is empty.</p>
					<button
						onClick={() => navigate(-1)}
						className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
						Go Back
					</button>
				</>
			)}
		</div>
	);
};
