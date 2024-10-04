import { useLocation } from "react-router-dom";
import notfoundimage from "../assets/imges/not-found/404-not-found.png";

function NotFoundCar() {
	const location = useLocation();

	return (
		<div className="w-full h-[70vh] flex flex-col justify-between  items-center">
			<h1 className="text-3xl font-bold text-gray-600">
				Car with id : {location.pathname.split("/")[2]} not found
			</h1>
			<img className="max-h-full object-cover" src={notfoundimage} alt="" />
		</div>
	);
}

export default NotFoundCar;
