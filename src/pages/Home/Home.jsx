import ChildrenContainer from "../../Components/ChildrenContainer";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import DownloadApp from "./DownloadApp";
import Hero from "./Hero";
import HighlistCar from "./HighlistCar";
import HowItWork from "./HowItWork";
import Reviews from "./Reviews";
import WhyYouShouldChooseUs from "./WhyYouShouldChooseUs";

function Home() {
	return (
		<>
			<ChildrenContainer>
				<NavBar />
				<Hero />
			</ChildrenContainer>
			<HighlistCar />
			<HowItWork />
			<WhyYouShouldChooseUs />
			<div className="relative overflow-hidden">
				<Reviews />
			</div>
			<ChildrenContainer>
				<DownloadApp />
			</ChildrenContainer>
			<Footer />
		</>
	);
}

export default Home;
