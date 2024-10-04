// eslint-disable-next-line react/prop-types
function ChildrenContainer({ children }) {
	return (
		<div className="container mx-auto lg:px-[160px] px-4 py-6 lg:mt-[40px] mt-6 font-Poppins ">
			{children}
		</div>
	);
}

export default ChildrenContainer;
