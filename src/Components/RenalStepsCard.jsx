import PropTypes from "prop-types";
function RenalStepsCard({ step }) {
	return (
		<div className="flex flex-col items-center text-center">
			<div className="bg-blue-100 p-4 rounded-lg mb-4">{step?.icon}</div>
			<h3 className="text-lg font-semibold mb-2">{step?.title}</h3>
			<p className="text-sm text-gray-600">{step?.description}</p>
		</div>
	);
}

RenalStepsCard.propTypes = {
	step: PropTypes.shape({
		icon: PropTypes.object,
		title: PropTypes.string,
		description: PropTypes.string,
	}),
};

export default RenalStepsCard;
