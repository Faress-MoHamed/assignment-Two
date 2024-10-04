import { useQuery } from "@tanstack/react-query";
import CarCard from "../../Components/CarCard";
import Header from "../../Components/Header";
import SearchBar from "../../Components/SearchBar";
import { useEffect, useState } from "react";
import axios from "axios";

// Import images statically
import car1 from "../../assets/imges/card/car1.png";
import car2 from "../../assets/imges/card/car2.png";
import car3 from "../../assets/imges/card/car3.png";
import car4 from "../../assets/imges/card/car4.png";
import ViewMoreCarsBtn from "../../Components/ViewMoreCarsBtn";

function HighlistCar() {
	const [images] = useState([car1, car2, car3, car4]); // Pre-load images statically
	const [cars, setCars] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const { isError, refetch } = useQuery({
		queryKey: ["cars"],
		queryFn: async () => {
			try {
				const response = await axios.get(
					"https://freetestapi.com/api/v1/cars?limit=4"
				);

				setCars(response.data);
				return response.data;
			} catch (error) {
				console.error(error);
			}
		},
	});

	useEffect(() => {
		if (searchTerm.length === 0) {
			refetch();
		}
	}, [searchTerm, refetch]);

	return (
		<main className="w-full">
			<div className="w-full lg:px-[160px] px-4 py-6 lg:mt-[40px] mt-6 font-Poppins ">
				<SearchBar
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					setCars={setCars}
				/>
				<Header subtitle={"POPULAR RENTAL DEALS"}>
					Most popular cars rental deals
				</Header>
				{isError ? (
					<div>Failed to load cars</div>
				) : cars.length === 0 ? (
					<p>No cars to show</p>
				) : (
					<div className="flex items-center flex-wrap justify-center gap-8 ">
						{cars?.map((el, idx) => (
							<CarCard image={images[idx]} key={el.id} car={el} />
						))}
					</div>
				)}
				<div className="flex justify-center items-center mt-16">
					<ViewMoreCarsBtn />
				</div>
			</div>
		</main>
	);
}

export default HighlistCar;
