import CarHero from "../../Components/CarHero";
import StoresApp from "../../Components/StoresApp";
import LineUnderHeroText from "../../assets/LineUnderHeroText.svg";
function Hero() {
	return (
		<main className="h-[750px]">
			<div className="flex items-center md:flex-row  flex-col-reverse justify-between bg-red   w-full">
				<div className="text-details flex flex-col justify-between md:gap-10 gap-7 md:w-[390px] w-full h-[238px]">
					<div className="flex flex-col items-end">
						<h1 className="text-title text-[48px] font-[600] leading-[48px] inline">
							Find, book and rent a car
							<span
								style={{
									backgroundImage: `url(${LineUnderHeroText})`,
									backgroundRepeat: "no-repeat",
									backgroundPosition: "bottom",
								}}
								className="text-primary-500 p-1"
							>
								Easily
							</span>
						</h1>
						{/* <div className="mr-1">
						<img src={LineUnderHeroText} alt="" />
					</div> */}
					</div>
					<p className="font-[400] text-[18ppx] leading-[27px] text-text-color">
						Get a car wherever and whenever you need it with your IOS and
						Android device.
					</p>
					<StoresApp />
				</div>
				<div className="md:w-2/4 w-full h-full flex items-center min-h-[400px]">
					<CarHero />
				</div>
			</div>
		</main>
	);
}

export default Hero;
