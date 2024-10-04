import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import PropTypes from "prop-types";

export default function SearchBar({ setCars, searchTerm, setSearchTerm }) {
	const [error, setError] = useState(null);

	const { isLoading, refetch } = useQuery({
		queryKey: ["cars", searchTerm],
		queryFn: async () => {
			try {
				console.log("refetch");
				const response = await axios.get(
					`https://freetestapi.com/api/v1/cars?search=${searchTerm}`
				);
				setCars(response.data.slice(0, 4));
				setError(null); // Clear any previous errors
				return response.data;
			} catch (error) {
				setError("Failed to fetch cars. Please try again.");
				console.error(error);
			}
		},
		enabled: false, // disable automatic fetching
	});

	// Trigger refetch when input changes
	const handleSearch = (e) => {
		const value = e.target.value.trim();
		setSearchTerm(value);
		console.log(value);
		if (value) {
			refetch();
		}
	};

	return (
		<div className="w-full flex items-center justify-center">
			<div className="w-[90vw]">
				<div className="md:p-3 py-3 flex items-center bg-white rounded-lg shadow-2xl overflow-hidden border border-text-color/30">
					<div className="flex items-center px-3 py-2">
						<FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
					</div>
					<input
						type="text"
						placeholder="Search By Name"
						className="flex-grow md:px-4 px-2 md:py-2 py-1 text-gray-600 focus:outline-none"
						onChange={handleSearch}
						aria-label="Search by car name"
					/>
					<button
						className="bg-blue-500 text-white md:px-6 px-3 mr-3 md:py-2 py-1 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
						onClick={refetch}
						aria-label="Search button"
					>
						{isLoading ? "Searching..." : "Search"}
					</button>
				</div>
				{error && <p className="text-red-500 mt-2">{error}</p>}
			</div>
		</div>
	);
}

SearchBar.propTypes = {
	// Add prop types here
	setCars: PropTypes.func,
	setSearchTerm: PropTypes.func,
	searchTerm: PropTypes.string,
};
