import PropTypes, { number } from "prop-types";
import RightArrow from "../assets/RightArrowWhite.svg";
import { Link } from "react-router-dom";
import carImg from "../assets/HeroCar.png";

const CarCard = ({ car }) => {
	const {
		id,
		car: make,
		car_model,
		car_model_year,
		car_vin,
		price,
		availability,
	} = car;

	return (
		<Link
			to={`../cars/${id}`}
			className="bg-white shadow-lg rounded-lg p-5 w-[270px] min-h-[430px] hover:shadow-2xl transition-shadow relative"
		>
			{/* Conditional Sticker */}
			{!availability && (
				<div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold py-1 px-3 rounded">
					Not Available
				</div>
			)}
			{/* Car Image */}
			<img
				src={carImg}
				alt={`${make} ${car_model}`}
				className="w-full h-52 object-cover rounded-t-lg mb-4"
			/>

			{/* Car Details */}
			<div className="flex flex-col justify-between">
				<div>
					<h2 className="text-lg font-bold text-[#262626] mb-2">
						{make} {car_model} ({car_model_year})
					</h2>
					<p className="text-sm text-gray-500 mb-3">{car_vin}</p>

					{/* Reviews */}
					<div className="flex items-center text-sm mb-4">
						<span className="text-yellow-500">⭐ 4.8</span>
						<span className="ml-2 text-gray-600">(2,436 reviews)</span>
					</div>

					{/* Features */}
					<ul className="flex flex-wrap gap-2 text-gray-600 text-xs mb-4">
						<li className="list-disc w-2/4">Feature 1</li>
						<li className="list-disc">Feature 2</li>
						<li className="list-disc">Feature 3</li>
					</ul>

					{/* Divider */}
					<div className="w-full h-px bg-gray-300 mb-4"></div>

					{/* Price */}
					<div className="flex justify-between items-center mb-4">
						<div className="text-lg font-semibold">Price</div>
						<div className="text-lg font-semibold text-black">
							{price}
							<span className="text-base text-gray-500">/day</span>
						</div>
					</div>
				</div>

				{/* Rent Now Button */}
				<Link
					to={`../cars/${id}`}
					className={`w-full py-2 rounded-lg text-center flex items-center justify-center gap-2 ${"bg-blue-600 text-white hover:bg-blue-700"} transition`}
					// aria-disabled={!availability}
				>
					{/* {availability ? "Rent Now" : "Unavailable"}
					 */}
					see Details
					{<img src={RightArrow} alt="right arrow" />}
				</Link>
			</div>
		</Link>
	);
};

// Define PropTypes for the car object
CarCard.propTypes = {
	car: PropTypes.shape({
		id: PropTypes.number,
		car: PropTypes.string,
		car_model: PropTypes.string,
		car_model_year: number,
		car_vin: PropTypes.string,
		price: PropTypes.string,
		availability: PropTypes.bool,
	}),
};

export default CarCard;
