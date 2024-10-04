// import { PhoneMockup } from "./phone-mockup";
import { useFormik } from "formik";
import Ihone14 from "../../assets/iphond14.svg";
import StoresApp from "../../Components/StoresApp";
import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
export default function DownloadApp() {
	const { mutate, data } = useMutation({
		mutationKey: ["contactus"],
		mutationFn: async (data) => {
			const { data: res } = await axios.post(
				"http://upskilling-egypt.com:3001/contact",
				data
			);
			return res;
		},
	});
	const formik = useFormik({
		initialValues: {
			name: "",
			phone: "",
			email: "",
		},
		onSubmit: (values) => {
			console.log(values);
			mutate(values);
			toast.success(data.message);
			formik.resetForm();
		},
	});
	return (
		<div className="flex md:flex-row relative flex-col justify-between items-center md:py-8 md:pl-8 rounded-lg ">
			<div className="md:w-1/2 w-full pr-8">
				<h2 className="text-4xl font-bold mb-2">
					Download Rentcars
					<br />
					App for <span className="text-blue-600">FREE</span>
				</h2>
				<p className="text-gray-600 mb-6">
					For faster, easier booking and exclusive deals.
				</p>
				{/* <div className="flex space-x-4 mb-8">
					<Button
						variant="outline"
						className="bg-black text-white hover:bg-gray-800"
					>
						<svg
							viewBox="0 0 24 24"
							className="w-6 h-6 mr-2 inline-block"
							fill="currentColor"
						>
							<path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
						</svg>
						Google Play
					</Button>
					<Button
						variant="outline"
						className="bg-black text-white hover:bg-gray-800"
					>
						<svg
							viewBox="0 0 24 24"
							className="w-6 h-6 mr-2 inline-block"
							fill="currentColor"
						>
							<path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
						</svg>
						App Store
					</Button>
				</div> */}
				<div className="my-8">
					<StoresApp />
				</div>
				<form onSubmit={formik.handleSubmit} className="space-y-4">
					<Input
						onChange={formik.handleChange}
						type="text"
						value={formik.values.name}
						placeholder="Name"
						name={"name"}
						className="bg-blue-50"
					/>
					<Input
						onChange={formik.handleChange}
						type="tel"
						value={formik.values.phone}
						name={"phone"}
						placeholder="Phone Number"
						className="bg-blue-50"
					/>
					<Input
						onChange={formik.handleChange}
						type="email"
						value={formik.values.email}
						name={"email"}
						placeholder="Email"
						className="bg-blue-50"
					/>
					<Button
						type={"submit"}
						className="w-full bg-blue-600 hover:bg-blue-700 text-white"
					>
						Send
					</Button>
				</form>
			</div>
			<div className="w-1/2 h-[424px] md:block relative hidden">
				<img src={Ihone14} alt="phone" className="absolute right-0 top-[30px] max-h-full" />
			</div>
		</div>
	);
}
