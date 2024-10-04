import BreadCrumb from "../Components/BreadCrumb";
import ChildrenContainer from "../Components/ChildrenContainer";
import TopArrow from "../assets/imges/landing-page/Top-Arrow.svg";
import car1 from "../assets/carDetails.svg";
import Header from "../Components/Header";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";
import { OrbitProgress } from "react-loading-indicators";
import NotFoundCar from "../Components/NotFoundCar";
function CarDetails() {
	const { id } = useParams();
	const { data: carData, isLoading } = useQuery({
		queryKey: ["car", id],
		queryFn: async () => {
			try {
				const response = await axios.get(
					`https://freetestapi.com/api/v1/cars/${id}`
				);
				return response.data;
			} catch (error) {
				console.error(error);
			}
		},
	});
	return (
		<>
			<ChildrenContainer>
				<BreadCrumb />
			</ChildrenContainer>
			{isLoading ? (
				<div className="w-full h-[50vh] flex justify-center items-center">
					<OrbitProgress
						color={"#1572D3"}
						variant="track-disc"
						speedPlus="2"
						easing="ease-in"
					/>
				</div>
			) : carData ? (
				<div className="container mx-auto px-4 py-0">
					<div className="flex flex-col md:flex-row gap-8 relative">
						<div className="md:w-1/2">
							<img
								className="absolute z-[-1] top-[-150px]"
								src={TopArrow}
								alt=""
							/>
							<img
								src={car1}
								alt={`${carData?.make} ${carData?.model}`}
								className="rounded-lg w-full h-full"
							/>
						</div>
						<div className="md:w-1/2">
							<Header
								styleing={{ textAlign: "left", alignItems: "start" }}
								subtitle={"WHY CHOOSE US"}
							>
								We offer the best experience with our rental deals
							</Header>
							<h2 className="text-2xl font-semibold">
								{carData?.year} {carData?.make} {carData?.model}
							</h2>
							<p className="text-gray-600 mb-4">
								${carData?.price.toLocaleString()}
							</p>
							<div className="grid grid-cols-2 gap-2 mb-2">
								<div className="flex items-center">
									<svg
										className="w-5 h-5 mr-2 text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13 10V3L4 14h7v7l9-11h-7z"
										></path>
									</svg>
									<span>{carData?.horsepower} HP</span>
								</div>
								<div className="flex items-center">
									<svg
										className="w-5 h-5 mr-2 text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										></path>
									</svg>
									<span>{carData?.mileage.toLocaleString()} miles</span>
								</div>
								<div className="flex items-center">
									<svg
										className="w-5 h-5 mr-2 text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										></path>
									</svg>
									<span>{carData?.transmission}</span>
								</div>
								<div className="flex items-center">
									<svg
										className="w-5 h-5 mr-2 text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
										></path>
									</svg>
									<span>{carData?.fuelType}</span>
								</div>
							</div>
							<h3 className="text-xl font-semibold mb-2">Features</h3>
							<ul className="list-disc list-inside mb-6">
								{carData?.features.map((feature, index) => (
									<li key={index}>{feature}</li>
								))}
							</ul>
							<button className="w-[216px] h-[48px] p-2 rounded-[8px] border border-1 border-text-color/30 flex items-center justify-center gap-2">
								Book Now
							</button>
						</div>
					</div>
				</div>
			) : (
				<NotFoundCar />
			)}
		</>
	);
}
export default CarDetails;
