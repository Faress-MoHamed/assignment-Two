import ChildrenContainer from "../../Components/ChildrenContainer";
import Header from "../../Components/Header";
import Marks from "../../Components/Marks";
import RentalSteps from "../../Components/RentalSteps";

import mark1 from "../../assets/imges/landing-page/marks/ac.png";
import mark2 from "../../assets/imges/landing-page/marks/audi.png";
// import mark3 from "../../assets/imges/landing-page/marks/Honda.svg";
import mark3 from "../../assets/imges/landing-page/marks/jaguar.png";
import mark4 from "../../assets/imges/landing-page/marks/nissan.png";
import mark5 from "../../assets/imges/landing-page/marks/volvo.png";
import { useState } from "react";

function HowItWork() {
	const [images] = useState([
		{ id: 1, image: mark1 },
		{ id: 2, image: mark2 },
		{ id: 3, image: mark3 },
		{ id: 4, image: mark4 },
		{ id: 5, image: mark5 },
	]);
	return (
		<main id="whyChooseUs" className="my-10">
			<ChildrenContainer>
				<Header subtitle={"HOW IT WORK"}>
					Rent with following 3 working steps
				</Header>
				<RentalSteps />
			</ChildrenContainer>
			<Marks images={images} />
		</main>
	);
}

export default HowItWork;
