import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "../src/components/Cart";
import Navbar from "../src/components/Navbar";
import { Makeup } from "./components/Makeup";
import { Skin } from "./components/Skin";

export const App = () => {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />{" "}
				<Route path="/cart" element={<Cart />} />
				<Route path="/makeup" element={<Makeup />} />
				<Route path="/skin" element={<Skin />} />
			</Routes>
		</>
	);
};
