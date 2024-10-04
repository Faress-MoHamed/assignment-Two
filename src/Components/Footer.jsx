import phone from "../assets/imges/footer/call.png";
import facebook from "../assets/imges/footer/facebook.png";
import instagram from "../assets/imges/footer/instagram.png";
import youtube from "../assets/imges/footer/youtube.png";
import mail from "../assets/imges/footer/sms.png";
import logo from "../assets/imges/footer/logo-footer.png";
import location from "../assets/imges/footer/location.png";

export default function Footer() {
	return (
		<footer className="bg-[#0a1929] text-white py-12 px-4 md:px-6">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<img
								src={logo}
								alt="logo"
								className="max-w-full h-8 rounded-full object-fill"
							/>
						</div>
						<div className="flex items-start space-x-2">
							<img src={location} className="w-5" />
							<p className="text-sm">
								25566 Hc 1, Glennallen, Alaska, 99588, USA
							</p>
						</div>
						<div className="flex items-center space-x-2">
							<img src={phone} className="w-5" />
							<p className="text-sm">+603 4784 273 12</p>
						</div>
						<div className="flex items-center space-x-2">
							<img src={mail} className="w-5" />
							<p className="text-sm">rentcars@gmail.com</p>
						</div>
					</div>

					<div>
						<h3 className="font-bold mb-4">Our Product</h3>
						<ul className="space-y-2 text-sm">
							{["Career", "Car", "Packages", "Features", "Priceline"].map(
								(item) => (
									<li key={item}>
										<a href="#" className="hover:underline">
											{item}
										</a>
									</li>
								)
							)}
						</ul>
					</div>

					<div>
						<h3 className="font-bold mb-4">Resources</h3>
						<ul className="space-y-2 text-sm">
							{[
								"Download",
								"Help Centre",
								"Guides",
								"Partner Network",
								"Cruises",
								"Developer",
							].map((item) => (
								<li key={item}>
									<a href="#" className="hover:underline">
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-bold mb-4">About Rentcars</h3>
						<ul className="space-y-2 text-sm">
							{[
								"Why choose us",
								"Our Story",
								"Investor Relations",
								"Press Center",
								"Advertise",
							].map((item) => (
								<li key={item}>
									<a href="#" className="hover:underline">
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-bold mb-4">Follow Us</h3>
						<div className="flex space-x-4">
							<a href="#" className="hover:text-gray-300">
								<img src={facebook} className="w-6" />
							</a>
							<a href="#" className="hover:text-gray-300">
								<img src={instagram} className="w-6" />
							</a>
							<a href="#" className="hover:text-gray-300">
								<img src={youtube} className="w-6" />
							</a>
						</div>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-gray-700 text-sm text-left">
					<p>&copy; 2023 • Rentcars, All Rights Reserved</p>
				</div>
			</div>
		</footer>
	);
}
