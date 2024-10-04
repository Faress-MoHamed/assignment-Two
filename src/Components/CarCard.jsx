import PropTypes from "prop-types";
import RightArrow from "../assets/RightArrowWhite.svg";
import { Link } from "react-router-dom";
const CarCard = ({ car }) => {
	return (
		<Link
			to={`../cars/${car.id}`}
			className="bg-white shadow-md rounded-lg p-4 w-[256px] min-h-[405px]"
		>
			<img
				src={car.image}
				alt={`${car.make} ${car.model}`}
				className="w-full h-48 object-fill rounded-t-lg mb-[24px]"
			/>
			<div className="w-full flex flex-col justify-between h-[250px]">
				<div className="p-0 ">
					<h2 className="text-base leading-[17px] text-[#262626] font-bold mb-2">
						{car.make} {car.model} {car.engine}
					</h2>
					<div className="flex items-center my-3 text-[12px] leading-[17px]">
						<span className="text-yellow-500">⭐ 4.8</span>
						<span className="text-gray-600 ml-1">(2,436 reviews)</span>
					</div>
					<ul className="flex flex-wrap items-center justify-between text-gray-600 text-[10px] mb-4 gap-2 list-disc w-full">
						{car?.features?.map((feature, idx) => {
							return (
								<li key={idx} className="item list-item l">
									{feature}
								</li>
							);
						})}
					</ul>
				</div>
				<div>
					<div className="flex justify-center items-center  mb-[24px]">
						<div className=" w-[100%] h-[1px] rounded-full bg-[#E0E0E0] text-center"></div>
					</div>
					<div className="flex items-center justify-between">
						<div className="text-lg font-semibold mb-2">Price</div>
						<div className="text-lg font-semibold text-black mb-4">
							${car.price}
							<span className="text-base text-text-color/50 font-normal">
								/day
							</span>
						</div>
					</div>
					<Link
						to={`../cars/${car.id}`}
						className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
					>
						Rent Now
						<img src={RightArrow} alt="right arrow" />
					</Link>
				</div>
			</div>
		</Link>
	);
};

// Define PropTypes for the car object
CarCard.propTypes = {
	car: PropTypes.shape({
		id: PropTypes.number.isRequired,
		make: PropTypes.string.isRequired,
		model: PropTypes.string.isRequired,
		year: PropTypes.number.isRequired,
		color: PropTypes.string.isRequired,
		mileage: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		fuelType: PropTypes.string.isRequired,
		transmission: PropTypes.string.isRequired,
		engine: PropTypes.string.isRequired,
		horsepower: PropTypes.number.isRequired,
		features: PropTypes.arrayOf(PropTypes.string).isRequired,
		owners: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
	}).isRequired,
	image: PropTypes.string,
};

export default CarCard;
