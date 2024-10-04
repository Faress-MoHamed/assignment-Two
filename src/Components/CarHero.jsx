import backgroundeHero from "../assets/backgroundHero.svg";
import HeroCar from "../assets/HeroCar.png";
function CarHero() {
	return (
		<div className="w-full flex flex-col justify-center items-center overflow-y-hidden">
			<img
				className="absolute right-0 top-[-33px] h-[866px] z-[-1] object-fill"
				src={backgroundeHero}
				alt="backgorund hero"
			/>
			<img
				src={HeroCar}
				className="md:absolute right-0 top-1/4 md:animate-car-animation md:w-2/4 w-full !max-w-[70%]"
				alt=""
			/>
		</div>
	);
}

export default CarHero;
