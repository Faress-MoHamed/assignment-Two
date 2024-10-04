import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ChildrenContainer from "../Components/ChildrenContainer";
import BreadCrumb from "../Components/BreadCrumb";
import { useState } from "react";
import Header from "../Components/Header";
import CarCard from "../Components/CarCard";
import Pagination from "../Components/pagination";
import { OrbitProgress } from "react-loading-indicators";

function AllCars() {
	const [page, setPage] = useState(1); // Start with page 1
	const [cars, setCars] = useState([]);
	const start = (page - 1) * 10;
	const end = page * 10;

	const { data, isLoading } = useQuery({
		queryKey: ["cars", page],
		queryFn: async () => {
			try {
				const response = await axios.get(
					`https://freetestapi.com/api/v1/cars?limit=${page * 10}`
				);
				setCars(response.data);
				return response.data;
			} catch (error) {
				console.error(error);
			}
		},
	});
	return (
		<ChildrenContainer>
			<BreadCrumb />
			<Header subtitle={"POPULAR RENTAL DEALS"}>
				Most popular cars rental deals
			</Header>
			{isLoading ? (
				<div className="w-full h-[50vh] flex justify-center items-center">
					<OrbitProgress
						color={"#1572D3"}
						variant="track-disc"
						speedPlus="2"
						easing="ease-in"
					/>
				</div>
			) : (
				<main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{data &&
						cars.slice(start, end).map((car) => {
							return <CarCard car={car} key={car.id} />;
						})}
				</main>
			)}
			<Pagination cars={cars} page={page} setPage={setPage} />
		</ChildrenContainer>
	);
}

export default AllCars;
