// Login.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/LogPage/Action";
import { RESET } from "../redux/LogPage/ActionType";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { loginLoading, loginSuccess, loginError } = useSelector(
		(state) => state.AuthenticationReducer
	);

	const handlePass = () => setShow(!show);

	const handleClick = () => {
		if (!email) {
			alert("Please enter your email address");
			return;
		}
		if (!email.includes("@")) {
			alert("Please include '@' in your email address");
			return;
		}
		if (!password) {
			alert("Please enter the password");
			return;
		}

		const payload = {
			email,
			password,
		};
		dispatch(login(payload));
	};

	useEffect(() => {
		console.log("loginSuccess:", loginSuccess);
		console.log("loginError:", loginError);
		if (loginSuccess) {
			alert("Login successfully");
			dispatch({ type: RESET });
			setTimeout(() => {
				window.location.href = "http://localhost:5173/";
			}, 1000);
		} else if (loginError) {
			alert(loginError);
			dispatch({ type: RESET });
		}
	}, [loginSuccess, loginError, navigate, dispatch]);

	return (
		<div className="max-w-md mx-auto border border-gray-400 shadow-md rounded-lg mt-5 mb-5 p-4 space-y-4">
			<h2 className="text-lg font-bold">LOGIN / REGISTER</h2>
			<div>
				<input
					required
					type="email"
					className="w-full border border-black p-2 rounded"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Enter Email ID"
				/>
			</div>
			<div>
				<div className="relative">
					<input
						required
						type={show ? "text" : "password"}
						className="w-full border border-black p-2 rounded pr-16"
						placeholder="Enter password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type="button"
						className="absolute right-0 top-0 mt-2 mr-2 bg-pink-600 text-white px-3 py-1 rounded"
						onClick={handlePass}>
						{show ? "Hide" : "Show"}
					</button>
				</div>
			</div>
			<button
				className={`w-full bg-pink-600 text-white py-2 rounded ${
					loginLoading ? "opacity-50" : ""
				}`}
				onClick={handleClick}
				disabled={loginLoading}>
				{loginLoading ? "Loading" : "PROCEED"}
			</button>

			<div className="flex justify-center items-center space-x-1">
				<span>If you don't have an account</span>
				<Link to="/user/signup">
					<span className="text-pink-600 cursor-pointer">Signup</span>
				</Link>
			</div>
		</div>
	);
};
