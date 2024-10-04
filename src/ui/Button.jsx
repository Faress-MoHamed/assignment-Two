export function Button({
	variant = "default",
	className = "",
	children,
	...props
}) {
	const baseStyles =
		"px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-400";
	const variantStyles = {
		default: "bg-blue-600 text-white hover:bg-blue-700",
		outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
	};

	return (
		<button
			className={`${baseStyles} ${variantStyles[variant]} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
