import { Link, useLocation } from "react-router-dom";

function BreadCrumb() {
	const location = useLocation();
	const crumbs = location.pathname.split("/").filter((el) => el); // Remove empty strings
	let accumulatedPath = "";

	// Helper to format the crumb title (capitalize first letter, etc.)
	const formatCrumb = (crumb) => {
		return crumb.charAt(0).toUpperCase() + crumb.slice(1).replace(/-/g, " ");
	};

	return (
		<nav className="flex items-center text-gray-500 text-sm z-50">
			<Link to="/" className="hover:text-black">
				Home
			</Link>
			{crumbs.map((crumb, idx) => {
				accumulatedPath += `/${crumb}`;
				return (
					<span key={idx} className="flex items-center">
						<span className="mx-2">/</span>
						{idx === crumbs.length - 1 ? (
							<span className="text-black">{formatCrumb(crumb)}</span>
						) : (
							<Link to={accumulatedPath} className="hover:text-black">
								{formatCrumb(crumb)}
							</Link>
						)}
					</span>
				);
			})}
		</nav>
	);
}

export default BreadCrumb;
