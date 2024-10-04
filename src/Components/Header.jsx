import PropTypes from "prop-types";

export default function Header({ children, subtitle, styleing = {} }) {
	return (
		<header
			className={`max-w-4xl flex items-center flex-col mx-auto text-center py-12 `}
			style={styleing}
		>
			<div className="flex justify-center items-center h-[42px] min-w-[181px] px-8 py-4 mb-4 bg-[#1572D31A] rounded-[8px]">
				<span className="text-sm font-medium text-[#1572D3]">{subtitle}</span>
			</div>
			<h1 className="text-gray-900 sm:text-[28px] md:text-[38px] leading-[50px]">
				{children}
			</h1>
		</header>
	);
}

Header.propTypes = {
	subtitle: PropTypes.string,
	children: PropTypes.node.isRequired,
	styleing: PropTypes.object,
};
