import { FaStar } from "react-icons/fa";

export default function ReviewCard({ review }) {
	if (!review) {
		return (
			<div className="bg-white rounded-2xl shadow-lg p-6 text-center">
				No review data available
			</div>
		);
	}

	return (
		<div
			className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center relative  md:w-[794px] md:h-[438px]
		h-full w-4/5 max-w-4xl mx-auto font-sans"
		>
			{/* Image Section */}
			<div className="w-full md:w-1/3 h-64 md:h-full">
				<img
					src={review.image}
					alt={review.name}
					className="rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none w-full h-full object-cover"
				/>
			</div>
			{/* Text Section */}
			<div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between h-full">
				<div className="space-y-4">
					<div className="flex items-baseline">
						<h2 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
							5.0
						</h2>
						<span className="ml-2 text-xl text-gray-500">stars</span>
					</div>
					<div className="flex items-center">
						{Array(5)
							.fill(0)
							.map((_, idx) => (
								<FaStar key={idx} className="text-yellow-500 h-5 w-5" />
							))}
					</div>
				</div>
				<p className="text-gray-600 italic font-normal text-base md:text-lg my-4">
					{review.quote}
				</p>
				<div>
					<h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
					<p className="text-gray-500">{review.location}</p>
				</div>
			</div>
		</div>
	);
}
