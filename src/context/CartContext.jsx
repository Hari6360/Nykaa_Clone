import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const handleAddToCart = (product) => {
		setCart((prevCart) => [...prevCart, product]);
		console.log("Cart Items:", [...cart, product]);
	};

	return (
		<CartContext.Provider value={{ cart, handleAddToCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const Skin = () => {
	const [data, setData] = useState([]);

	const url = "https://nykaa-e3286-default-rtdb.firebaseio.com/cart";

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
	});

	const { handleAddToCart } = useCart();

	return (
		<div className="grid grid-cols-3 gap-4">
			{data.length > 0 ? (
				data.map((product, i) => (
					<div key={i} className="bg-white p-4 rounded-lg shadow-md">
						{/* Product Image */}
						<img
							src={product.imgsrc}
							alt={product.title}
							className="h-[220px] w-auto mx-auto"
						/>
						<h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
						<div className="mt-2">
							<span className="line-through text-gray-500">
								{product.price}
							</span>{" "}
							<span className="text-red-600 font-bold">
								{product["discounted-price"]}{" "}
							</span>
							<span className="ml-2 text-green-600">({product.discount})</span>
						</div>
						<div className="mt-2 flex items-center">
							<span className="text-yellow-500">★★★★★</span>{" "}
							<span className="ml-2 text-gray-600">
								{product.rating} reviews
							</span>
						</div>
						<button
							className="mx-auto mt-4 flex flex-col align-baseline justify-center bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 active:bg-red-700 transition duration-300 ease-in-out"
							onClick={() => handleAddToCart(product)}>
							Add To Cart
						</button>
					</div>
				))
			) : (
				<p>No products available</p>
			)}
		</div>
	);
};
