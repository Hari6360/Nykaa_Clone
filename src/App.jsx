// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./components/Cart";
import Navbar from "./components/Navbar";
import { Makeup } from "./components/Makeup";
import { Skin } from "./components/Skin";
import { SignUp } from "./Auth/Signup";
import { Login } from "./Auth/Login";

export const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/makeup" element={<Makeup />} />
				<Route path="/skin" element={<Skin />} />
				<Route path="/login" element={<Login />} />
				<Route path="/user/signup" element={<SignUp />} />
			</Routes>
		</>
	);
};
