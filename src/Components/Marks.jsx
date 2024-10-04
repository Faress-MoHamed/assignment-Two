import PropTypes from "prop-types";
function Marks({ images }) {
	return (
		<div className="flex items-center justify-between overflow-hidden gap-8">
			{images.map((el, idx) => (
				<img key={idx} src={el.image} alt={"mark"} />
			))}
		</div>
	);
}

Marks.propTypes = {
	images: PropTypes.arrayOf(PropTypes.object),
};

export default Marks;
