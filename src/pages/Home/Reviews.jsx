import Header from "../../Components/Header";
import ReviewCard from "../../Components/ReviewCard";
import bgQuto from "../../assets/imges/landing-page/bg-sec6.png";
import image1 from "../../assets/imges/landing-page/sec-6/girl.png";
import image2 from "../../assets/imges/landing-page/sec-6/boy.png";
function Reviews() {
	const testimonials = [
		{
			name: "Charlie Johnson",
			location: "from New York, US",
			rating: 5,
			image: image1,
			quote:
				'"I feel very secure when using caretail\'s services. Your customer care team is very enthusiastic and the driver is always on time."',
		},
		{
			name: "Wilson",
			location: "from LA, US",
			rating: 5,
			image: image2,
			quote:
				'"I\'ve been using your services for years. Your service is great. I will continue to use your service."',
		},
	];
	return (
		<main className="py-[127px] bg-[#F7FBFF]">
			<img className="absolute top-0 left-0" src={bgQuto} alt="" />
			<img className="absolute top-0 right-0 rotate-180" src={bgQuto} alt="" />
			<Header subtitle={"TESTIMONIALS"}>What peole say about us?</Header>
			<div className="flex items-center md:flex-row flex-col gap-10 w-full  overflow-hidden">
				{testimonials.map((testimonial, index) => (
					<ReviewCard key={index} review={testimonial} />
				))}
			</div>
		</main>
	);
}

export default Reviews;
