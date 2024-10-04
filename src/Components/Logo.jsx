import LogoSvg from "../assets/Logo.svg";
function Logo() {
	return (
		<div className="flex gap-2 items-center">
			<img className="w-[24px]" src={LogoSvg} alt="" />
			<p className="text-primary-500 font-bold font-Poppins  md:text-sm lg:text-base">
				RENTCARS
			</p>
		</div>
	);
}

export default Logo;
