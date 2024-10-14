import { FaMapMarkerAlt } from "react-icons/fa";
import PropTypes from "prop-types";

export default function SearchBar({ setSearchTerm, refetch }) {
	// Trigger refetch when input changes
	const handleSearch = (e) => {
		const value = e.target.value;
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
						Search
					</button>
				</div>
			</div>
		</div>
	);
}

SearchBar.propTypes = {
	// Add prop types here
	setSearchTerm: PropTypes.func,
	refetch: PropTypes.func,
};
