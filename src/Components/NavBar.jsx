import { Link } from "react-router-dom";
import Logo from "./Logo";
import AuthButtons from "./AuthButtons";
import { IoClose, IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
function NavBar() {
	const [open, setOpen] = useState(false);

	const NavbarLinks = [
		{ id: 1, name: "Become a renter" },
		{ id: 2, name: "Rental deals" },
		{ id: 3, name: "How it work" },
		{ id: 4, name: "Why choose us" },
	];


	function handleClose() {
		setOpen(false);
	}
	function handleOpen() {
		setOpen(true);
	}

	useEffect(() => {
		return setOpen(false);
	}, []);
	return (
		<>
			<div className="md:flex justify-between items-center hidden w-full">
				<Logo />
				<div className="flex items-center space-x-4">
					{NavbarLinks.map((link) => (
						<Link
							key={link.id}
							className="text-text-color hover:text-gray-900 transition duration-300 md:text-sm lg:text-base"
						>
							{link.name}
						</Link>
					))}
				</div>
				<AuthButtons />
			</div>
				<button
					onClick={handleOpen}
					className="md:border-none border-[0.5px] border-black/20 rounded-[0.375rem] py-[0.25rem] px-[0.75rem] md:hidden block"
				>
					<IoMenu className="text-3xl font-light" />
				</button>
			{open && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						onClick={handleClose}
						className={
							"left-0 top-0 h-full z-20 fixed inset-0 overflow-hidden bg-black bg-opacity-50 md:hidden"
						}
					></motion.div>
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						animate={open ? { opacity: 1, x: 0 } : {}}
						exit={{ x: -100, opacity: 0 }}
						transition={{ duration: 0.5 }}
						className={`fixed ${
							open ? "" : "hidden"
						} left-0 top-0 z-[999] w-[40%] md:top-5`}
					>
						<ul
							className={`flex h-screen w-full flex-col items-start justify-start gap-10 bg-white p-3 backdrop-blur-lg md:hidden`}
						>
							<button
								aria-label="close sidebar"
								className="text-4xl text-black"
								onClick={() => handleClose()}
							>
								<IoClose />
							</button>
							<Logo />
							{NavbarLinks.map((item, index) => {
								return (
									<motion.li
										initial={{ opacity: 0, x: -100 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{
											delay: 0.2 * (index + 1),
											ease: [0.17, 0.55, 0.55, 1],
										}}
										key={index}
									>
										<Link
											key={item.id}
											className="text-text-color hover:text-gray-900 transition duration-300"
										>
											{item.name}
										</Link>
									</motion.li>
								);
							})}
							<AuthButtons />
						</ul>
					</motion.div>
				</>
			)}
		</>
	);
}

export default NavBar;
