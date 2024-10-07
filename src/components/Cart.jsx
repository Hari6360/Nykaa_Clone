import { useState } from "react";

export const Cart = () => {
	const [cartItems, setCartItems] = useState([]);

	return (
		<div>
			{/* {cartItems.length === 0 ? (
				<h1>Please add something to the cart</h1>
			) : (
				<ul>
					{cartItems.map((item, index) => (
						<li key={index}>{item.name}</li>
					))}
				</ul>
			)} */}
		</div>
	);
};
