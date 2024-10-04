// import { Check, Calendar, Car } from "lucide-react";

import { BiCalendar, BiCar, BiCheck } from "react-icons/bi";
import RenalStepsCard from "./RenalStepsCard";

export default function RentalSteps() {
	const steps = [
		{
			icon: <BiCheck className="w-6 h-6 text-blue-500" />,
			title: "Choose location",
			description: "Choose your and find your best car",
		},
		{
			icon: <BiCalendar className="w-6 h-6 text-blue-500" />,
			title: "Pick-up date",
			description: "Select your pick up date and time to book your car",
		},
		{
			icon: <BiCar className="w-6 h-6 text-blue-500" />,
			title: "Book your car",
			description: "Book your car and we will deliver it directly to you",
		},
	];

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{steps.map((step, index) => (
					<RenalStepsCard step={step} key={index} />
				))}
			</div>
		</div>
	);
}
