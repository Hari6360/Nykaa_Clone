import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Cart } from "../src/components/Cart";
import Navbar from "../src/components/Navbar";
import { Carousel } from "./components/Carousel";

export const App = () => {
	return (
		<>
			<Navbar />
			<Carousel />
			<Routes>
				<Route path="/" element={<Home />} />{" "}
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</>
	);
};
