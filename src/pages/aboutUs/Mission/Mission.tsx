const Mission = () => {
	return (
		<div className="mt-20">
			<div className="container mx-auto">
				<div className="ml-4">
					<h2 className="uppercase text-primary font-bold text-4xl ">Our Mission</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5">
					<div className="text">
						<p className="text-xl ml-4 text-justify">
							"At Pro-Gear, our mission is to equip athletes with premium sports gear that inspires
							confidence and enhances performance. We strive to innovate and deliver superior
							products that cater to the diverse needs of athletes, ensuring they can excel in their
							respective sports." "Our vision at Pro-Gear is to be recognized as a leading provider
							of innovative sports equipment, known for our commitment to quality, performance, and
							customer satisfaction. We aspire to create a global community of athletes who trust in
							our products to achieve their athletic goals." These statements reflect a focus on
							quality, innovation, customer-centricity, and the aspiration to make a positive impact
							in the sports community. Feel free to adjust them to better fit the specific ethos and
							goals of your company.
						</p>
					</div>
					<div>
						<img
							className=" h-[400px] w-[400px] ml-11"
							src="https://i.ibb.co/C23Srgy/pexels-thirdman-7652039.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mission;
