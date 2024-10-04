import { BiShield, BiUser } from "react-icons/bi";
import { BsHeadphones, BsTruck } from "react-icons/bs";
import Header from "../../Components/Header";
import FeatureItem from "../../Components/FeatureItem";
import ImageCar from "../../assets/imges/landing-page/carWhyyouchooseUs.svg";
import ArrowTop from "../../assets/imges/landing-page/Top-Arrow.svg";
export default function WhyYouShouldChooseUs() {
	return (
		<div className=" p-8 flex md:flex-row flex-col items-center justify-between max-w-6xl mx-auto relative">
			<div className="md:w-1/2 w-full relative">
				<img src={ArrowTop} alt="arrow top" className="md:block hidden" />
				<img
					src={ImageCar}
					alt="Audi R8 sports car"
					className="w-[813px] h-[359px] top-[150px] left-[-14.8vw] object-fill md:absolute"
				/>
			</div>
			<>
				<div className="md:w-1/2 w-full md:pl-8">
					<Header
						subtitle={"WHY CHOOSE US"}
						styleing={{ textAlign: "left", alignItems: "start" }}
					>
						We offer the best experience with our rental deals
					</Header>
					<div className="space-y-4">
						<FeatureItem
							icon={<BiShield className="w-6 h-6 text-blue-500" />}
							title="Best price guaranteed"
							description="Find a lower price? We'll refund you 100% of the difference."
						/>
						<FeatureItem
							icon={<BiUser className="w-6 h-6 text-blue-500" />}
							title="Experience driver"
							description="Don't have driver? Don't worry, we have many experienced driver for you."
						/>
						<FeatureItem
							icon={<BsTruck className="w-6 h-6 text-blue-500" />}
							title="24 hour car delivery"
							description="Book your car anytime and we will deliver it directly to you."
						/>
						<FeatureItem
							icon={<BsHeadphones className="w-6 h-6 text-blue-500" />}
							title="24/7 technical support"
							description="Have a question? Contact Rentcars support any time when you have problem."
						/>
					</div>
				</div>
			</>
		</div>
	);
}
