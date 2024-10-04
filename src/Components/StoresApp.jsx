import AppStore from "../assets/AppStore.png";
import GooglePlay from "../assets/GooglePlay.png";
function StoresApp() {
	return (
		<div className=" flex gap-[12px]">
			<img className="h-[36px]" src={AppStore} alt="" />
			<img className="h-[36px]" src={GooglePlay} alt="" />
		</div>
	);
}

export default StoresApp;
