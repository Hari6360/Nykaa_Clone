import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "../src/components/Cart";
import Navbar from "../src/components/Navbar";
import { Carousel } from "./components/Carousel";
import { Makeup } from "./components/Makeup";

export const App = () => {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />{" "}
				<Route path="/cart" element={<Cart />} />
				<Route path="/makeup" element={<Makeup />} />
			</Routes>
		</>
	);
};
