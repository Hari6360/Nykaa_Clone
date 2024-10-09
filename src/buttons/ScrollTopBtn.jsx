import { useEffect, useState } from "react";

export const ScrollTopBtn = () => {
	const [scrollButton, setScrollButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setScrollButton(true);
			} else {
				setScrollButton(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			{scrollButton && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-10 right-6 bg-black text-white p-6 square-full shadow-lg">
					↑
				</button>
			)}
		</>
	);
};
