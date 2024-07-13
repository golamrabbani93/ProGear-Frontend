const Team = () => {
	return (
		<div className="my-20">
			<div className="container mx-auto">
				<div>
					<div className="mb-20">
						<h2 className="uppercase text-primary font-bold text-4xl ">Our Team</h2>
					</div>
					<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
						<div className="shadow-md">
							<div>
								<img
									className="w-[260px] h-[260px]"
									src="https://bootstrapbrain.com/demo/components/teams/team-1/assets/img/team-img-1.jpg"
									alt=""
								/>
							</div>
							<div className="pl-4 mt-2 pb-3">
								<h4 className="text-3xl uppercase">Flora Nyra</h4>
								<h5 className="text-2xl">Product Manager</h5>
							</div>
						</div>
						<div className="shadow-md">
							<div>
								<img
									className="w-[260px] h-[260px]"
									src="https://bootstrapbrain.com/demo/components/teams/team-1/assets/img/team-img-5.jpg"
									alt=""
								/>
							</div>
							<div className="pl-4 mt-2 pb-3">
								<h4 className="text-3xl uppercase">Evander Mac</h4>
								<h5 className="text-2xl">Art Director</h5>
							</div>
						</div>
						<div className="shadow-md">
							<div>
								<img
									className="w-[260px] h-[260px]"
									src="https://bootstrapbrain.com/demo/components/teams/team-1/assets/img/team-img-2.jpg"
									alt=""
								/>
							</div>
							<div className="pl-4 mt-2 pb-3">
								<h4 className="text-3xl uppercase">Taytum Elia</h4>
								<h5 className="text-2xl">Investment Planners</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
