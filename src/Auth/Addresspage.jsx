import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddAddress } from "../../Redux/AddressPage/action";

const initialAddress = {
	pincode: "",
	Address: "",
	name: "",
	phone: "",
	email: "",
};

const Address = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { userid } = useSelector((state) => state.AuthenticationReducer);
	const { ItemCount, Totalprice, Totaldiscountprice } = useSelector(
		(state) => state.CartReducer
	);

	const { loading, success, error, Personaddress } = useSelector(
		(state) => state.AddressReducer
	);

	const [screen, setScreen] = useState("");
	const [address, setAddress] = useState(initialAddress);
	const [isOpen, setIsOpen] = useState(false);
	const firstField = useRef(null);

	// ******** Address *****************
	const handlePost = () => {
		if (
			address.email &&
			address.name &&
			address.phone &&
			address.pincode &&
			address.Address
		) {
			if (address.phone.length !== 10) {
				alert(
					"Invalid phone number. Phone number must be at least 10 characters"
				);
				return;
			}
			if (address.pincode.length !== 6) {
				alert("Invalid pincode. Pincode must be at least 6 characters");
				return;
			}
			if (!address.email.includes("@")) {
				alert("Invalid email address. Email address must contain @");
				return;
			}
			dispatch(AddAddress(userid, address));
			alert("Address added successfully");
			navigate("/payment");
		} else {
			alert("Please fill all the address details");
		}
	};

	const screenSizefn = () => {
		const screenSize = window.outerWidth;
		if (screenSize >= 1440) {
			setScreen("lg");
		} else if (screenSize >= 768) {
			setScreen("md");
		} else {
			setScreen("sm");
		}
	};

	useEffect(() => {
		screenSizefn();
		window.addEventListener("resize", screenSizefn);
		return () => {
			window.removeEventListener("resize", screenSizefn);
		};
	}, []);

	const handleChange = (e) => {
		const Name = e.target.name;
		const value = e.target.value;
		setAddress((address) => {
			return { ...address, [Name]: value };
		});
	};

	return (
		<div
			className={`w-${
				screen === "sm" ? "90" : screen === "md" ? "80" : "60"
			}% mx-auto mt-8 mb-8`}>
			<div
				className={`grid gap-8 ${
					screen === "sm" ? "grid" : "flex"
				} justify-between`}>
				<div>
					<h1 className="text-4xl font-bold">Add Delivery Address</h1>
					<p className="text-sm">
						Detailed address will help our delivery partner reach your doorstep
						quickly
					</p>
				</div>
				<img
					className="w-72 mx-auto object-cover"
					src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/header-address.svg"
					alt="Address"
				/>
			</div>

			<div
				className={`mt-8 grid gap-8 ${
					screen === "sm" ? "grid" : "flex"
				} justify-between`}>
				<div className="w-72 cursor-pointer" onClick={() => setIsOpen(true)}>
					<div className="flex flex-col justify-center h-36 border-2 border-dashed border-gray-400 rounded-lg">
						<img
							className="w-4 h-4 mx-auto mb-2"
							src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/plus-icon.svg"
							alt="Address"
						/>
						<h1 className="text-lg text-pink-600">Add Delivery Address</h1>
					</div>

					{/* Drawer */}
					{isOpen && (
						<div className="fixed inset-0 flex items-center justify-center z-50">
							<div className="bg-white rounded-lg shadow-lg w-96">
								<div className="flex justify-between items-center p-4 border-b">
									<h2 className="text-2xl">Delivery Address</h2>
									<button onClick={() => setIsOpen(false)}>X</button>
								</div>
								<div className="p-4">
									<div className="mb-4">
										<label htmlFor="pincode" className="block mb-1">
											Address
										</label>
										<input
											ref={firstField}
											id="pincode"
											type="number"
											placeholder="Pincode"
											name="pincode"
											value={address.pincode}
											onChange={handleChange}
											className="w-full p-2 border border-gray-300 rounded"
										/>
										<textarea
											placeholder="Add Delivery Address"
											onChange={handleChange}
											name="Address"
											value={address.Address}
											className="w-full p-2 border border-gray-300 rounded mt-2"
										/>
									</div>
									<div className="mb-4">
										<label htmlFor="name" className="block mb-1">
											Contact
										</label>
										<p className="text-sm">
											Information provided here will be used to contact you for
											delivery updates
										</p>
										<input
											placeholder="Name"
											name="name"
											value={address.name}
											onChange={handleChange}
											className="w-full p-2 border border-gray-300 rounded mt-2"
										/>
										<input
											placeholder="Phone"
											name="phone"
											value={address.phone}
											onChange={handleChange}
											className="w-full p-2 border border-gray-300 rounded mt-2"
										/>
										<input
											placeholder="Email ID"
											name="email"
											value={address.email}
											onChange={handleChange}
											className="w-full p-2 border border-gray-300 rounded mt-2"
										/>
									</div>
								</div>
								<div className="p-4 border-t">
									<button
										onClick={handlePost}
										className="w-full bg-pink-600 text-white p-3 rounded">
										Ship to this address
									</button>
								</div>
							</div>
						</div>
					)}
				</div>

				<div className="w-56">
					<div className="bg-white shadow-md rounded-lg">
						<div className="flex justify-between p-4 border-b">
							<h1 className="text-lg">Bag</h1>
							<h1 className="text-sm">{ItemCount} Items</h1>
						</div>
						<div className="flex justify-between p-4 border-b">
							<h1 className="text-lg">Price Details</h1>
							<h1 className="text-sm">₹{Totaldiscountprice}</h1>
						</div>
						<div className="p-4">
							<p className="flex justify-between">
								<span>Bag MRP ({ItemCount} items)</span>
								<span>₹{Totalprice}</span>
							</p>
							<p className="flex justify-between">
								<span>After Discount</span>
								<span>₹{Totaldiscountprice}</span>
							</p>
							<p className="flex justify-between">
								<span>Saving At this Time</span>
								<span className="font-bold text-lg text-green-600">
									{Totalprice - Totaldiscountprice}
								</span>
							</p>
							<h1 className="flex justify-between text-lg">
								<span>You Pay</span> <span>₹{Totaldiscountprice}</span>
							</h1>
						</div>
					</div>
					<div className="flex gap-2 mt-3 p-3">
						<p className="text-xs">
							Buy authentic products. Pay securely. Easy returns and exchange
						</p>
						<img
							className="w-10 h-10"
							src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/pay-secure-lock.png"
							alt="image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Address;
