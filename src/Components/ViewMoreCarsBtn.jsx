import { Link } from "react-router-dom";
import RightArrow from "../assets/RightArrow.svg";
function ViewMoreCarsBtn() {
	return (
		<Link
			to={"cars"}
			className="w-[216px] h-[48px] p-2 rounded-[8px] border border-1 border-text-color/30 flex items-center justify-center gap-2"
		>
			Show all vehicles
			<img src={RightArrow} alt="right arrow" />
		</Link>
	);
}

export default ViewMoreCarsBtn;
