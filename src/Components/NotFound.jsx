import { useLocation } from "react-router";
import notfoundimage from "../assets/imges/not-found/404-not-found.png";
import BreadCrumb from "./BreadCrumb";
import ChildrenContainer from "./ChildrenContainer";
function NotFound() {
	const location = useLocation();
	console.log(location);
	return (
		<ChildrenContainer>
			<BreadCrumb />
			<div className="w-full h-[60vh] flex justify-center items-center">
				<img className="max-h-full object-cover" src={notfoundimage} alt="" />
			</div>
		</ChildrenContainer>
	);
}

export default NotFound;
