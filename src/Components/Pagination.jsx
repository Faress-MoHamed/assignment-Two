import PropTypes from "prop-types";
function Pagination({ page, setPage, cars: data }) {
	// Handlers for pagination
	const nextPage = () => {
		if (data.length > page) setPage(page + 1);
	};
	const prevPage = () => {
		if (page > 1) setPage(page - 1);
	};

	return (
		<div>
			{/* Pagination Controls */}
			<div className="flex justify-center items-center mt-8 space-x-2">
				<button
					className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 disabled:opacity-50"
					onClick={prevPage}
					disabled={page === 1} // Disable button if on the first page
				>
					Previous
				</button>
				{Array(3)
					.fill(0)
					.map((_, idx) => (
						<button
							onClick={() => {
								setPage(idx + 1);
							}}
							key={idx}
							className={`px-4 py-2 ${
								page === idx + 1 ? "text-blue-700" : "text-gray-500 "
							}`}
						>
							{idx + 1}
						</button>
					))}
				<button
					className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 disabled:opacity-50"
					onClick={nextPage}
					disabled={page === 3} // Disable if on the last page
				>
					Next
				</button>
			</div>
		</div>
	);
}

Pagination.propTypes = {
	page: PropTypes.number,
	cars: PropTypes.array,
	setPage: PropTypes.func,
};

export default Pagination;
