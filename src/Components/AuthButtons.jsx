function AuthButtons() {
	return (
		<div className="flex md:flex-row flex-col items-center gap-[8px] md:w-auto w-full  md:text-sm lg:text-base">
			<button className="text-text-color">Sign In</button>
			<button className="bg-primary-500 px-7 py-2 rounded-[8px] text-white md:w-auto w-full">
				Sign Up
			</button>
		</div>
	);
}

export default AuthButtons;
