const Company = () => {
	return (
		<div className="my-10 container mx-auto ">
			<div className="mx-10">
				<div className="">
					<h2 className="uppercase text-primary font-bold text-4xl ">Our Story</h2>
				</div>
				<div className="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
					<div className="bg-primary p-3 opacity-4 h-[400px] rounded flex flex-col justify-center">
						<div className="px-4">
							<h3 className="text-white text-3xl font-semibold  uppercase ">About Pro-Gear</h3>
							<p className="text-xl  mt-4 text-justify">
								Pro-Gear is dedicated to providing high-quality sports gear and equipment tailored
								for enthusiasts and professionals alike. We specialize in offering a wide range of
								products designed to enhance performance and comfort across various sports
								disciplines.
							</p>
						</div>
					</div>
					<div className="bg-primary p-3 opacity-4 h-[400px] rounded flex flex-col justify-center">
						<div className="px-4">
							<h3 className="text-white text-3xl font-semibold  uppercase ">Our Mission</h3>
							<p className="text-xl  mt-4 text-justify">
								At Pro-Gear, our mission is to empower athletes with superior gear that elevates
								their game. We aim to foster a community where passion for sports meets innovation
								in product design, ensuring every athlete can perform at their best. product design,
								ensuring every athlete can perform at
							</p>
						</div>
					</div>
					<div className="bg-primary p-3 opacity-4 h-[400px] rounded flex flex-col justify-center">
						<div className="px-4">
							<h3 className="text-white text-3xl font-semibold  uppercase ">Product Range</h3>
							<p className="text-xl  mt-4 text-justify">
								Explore our extensive selection of sports equipment, from apparel and footwear to
								specialized gear for specific sports like soccer, basketball, tennis, and more. Each
								product at Pro-Gear is carefully curated to meet the demands of athletes seeking
								performance, durability, and style.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Company;
