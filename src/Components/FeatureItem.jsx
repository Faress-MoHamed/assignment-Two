export default function FeatureItem({ icon, title, description }) {
	return (
		<div className="flex items-start gap-6">
			<div className="bg-[#ECF5FF] rounded-[16px] min-h-16 min-w-16 flex justify-center items-center relative">
				{icon}
			</div>
			<div>
				<h3 className="font-semibold">{title}</h3>
				<p className="text-sm text-gray-600">{description}</p>
			</div>
		</div>
	);
}
