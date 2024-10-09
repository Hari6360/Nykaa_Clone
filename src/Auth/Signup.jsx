import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RESET } from "../redux/LogPage/ActionType";
import { Signup } from "../redux/LogPage/Action";
import { Login } from "./Login";

export const SignUp = () => {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [show, setShow] = useState(false);

	const dispatch = useDispatch();

	const { signupLoading, signupSuccess, signupError } = useSelector(
		(store) => store.AuthenticationReducer
	);

	const handlePass = () => setShow(!show);

	const signupBtnHandle = () => {
		if (!name) {
			alert("Please enter your name");
			return;
		}
		if (!phone) {
			alert("Please enter your phone number");
			return;
		}
		if (phone.length !== 10) {
			alert("Phone number should be 10 digits");
			return;
		}
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
		if (password.length < 8) {
			alert("Password length should be at least 8 characters");
			return;
		}
		const data = {
			name,
			email,
			phone,
			password,
		};
		dispatch(Signup(data));
	};

	if (signupSuccess) {
		alert(signupSuccess);
		dispatch({ type: RESET });
		setTimeout(() => {
			navigate("/user/login");
		}, 1500);
	}

	if (signupError) {
		alert(signupError);
		return;
	}

	return (
		<div className="max-w-md mx-auto border border-gray-400 shadow-md rounded-lg mt-5 mb-5 p-4 space-y-4">
			<h2 className="text-lg font-bold">SIGN UP</h2>
			<div>
				<input
					required
					type="text"
					className="w-full border border-black p-2 rounded"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Enter Your Name"
				/>
			</div>
			<div>
				<input
					required
					type="tel"
					className="w-full border border-black p-2 rounded"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					placeholder="Enter Mobile Number"
					maxLength={10}
				/>
			</div>
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
					signupLoading ? "opacity-50" : ""
				}`}
				onClick={signupBtnHandle}
				disabled={signupLoading}>
				{signupLoading ? "Submitting" : "PROCEED"}
			</button>
			<div className="flex justify-center items-center space-x-1">
				<span>Already a user?</span>
				<Link to="/user/login">
					<span className="text-pink-600 cursor-pointer">Sign in</span>
				</Link>
			</div>
		</div>
	);
};
